<script lang="ts" setup>
import customParseFormat from 'dayjs/plugin/customParseFormat'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'
import { buttonVariants } from '@/components/ui/button'
import { useDayjs } from '#dayjs'
import { cn } from '~/lib/utils'
import type { Session, SessionDate } from '~/types'
import { rooms, sessionsByDate } from '~/constants'

const props = defineProps({
  intervalInMins: {
    required: false,
    type: Number,
    default: 15,
  },
})
const dayjs = useDayjs()
dayjs.extend(customParseFormat)
dayjs.extend(isSameOrBefore)

const selectedDate = ref(Object.keys(sessionsByDate)[0] as SessionDate)

const selectedDateSessions = computed(() => sessionsByDate[selectedDate.value] as Array<Session>)

function getIntervalTime(time: string, intervalInMins: number, operation: 'add' | 'subtract') {
  const parsedTime = dayjs(time, 'HH:mm')
  const timeIntervalOffset = operation === 'add' ? intervalInMins - ((parsedTime.minute() % intervalInMins) || intervalInMins) : parsedTime.minute() % intervalInMins
  const timeInterval = parsedTime[operation](timeIntervalOffset, 'minute')

  return timeInterval
}

const timeintervals = computed(() => {
  const startTime = selectedDateSessions.value[0].time.start
  const endTime = selectedDateSessions.value.at(-1)?.time.end
  const startTimeInterval = getIntervalTime(startTime, props.intervalInMins, 'subtract')
  const endTimeInterval = getIntervalTime(endTime!, props.intervalInMins, 'add')
  const intervals = []
  let currentTimeInterval = startTimeInterval.clone()

  while (currentTimeInterval.isSameOrBefore(endTimeInterval)) {
    intervals.push(currentTimeInterval)
    currentTimeInterval = currentTimeInterval.add(props.intervalInMins, 'minute')
  }

  return intervals
})

function getGridRow(time: string) {
  const timeFromIntervalInMins = (dayjs(time, 'HH:mm').diff(timeintervals.value.at(0)!, 'minute'))
  const rowOffset = 2
  const gridRow = timeFromIntervalInMins + rowOffset

  return gridRow
}

function getDay(date: string) {
  return dayjs(date).utc().format('dddd')
}

function changeDay(newSelectedDate: string | number) {
  selectedDate.value = newSelectedDate as SessionDate
}
</script>

<template>
  <Tabs
    :default-value="Object.keys(sessionsByDate)[0]"
    class="relative [--agenda-width:800px] w-[--agenda-width] max-w-full flex flex-col items-stretch gap-8 mx-auto overflow-x-auto rounded-md"
    @update:model-value="changeDay"
  >
    <TabsList class="justify-start max-w-full overflow-x-auto">
      <TabsTrigger
        v-for="date in Object.keys(sessionsByDate)"
        :key="date"
        :value="date"
        class="grow"
      >
        {{ getDay(date) }}
      </TabsTrigger>
    </TabsList>
    <TabsContent
      :value="selectedDate"
      class="grid gap-x-2 gap-y-1 max-h-[calc(100svh-48px)] px-1 pb-2 m-0 overflow-auto"
      :style="{
        gridTemplateRows: `auto repeat(${timeintervals.at(-1)!.diff(timeintervals[0], 'minute')}, auto)`,
        gridTemplateColumns: `auto repeat(${rooms.length}, 1fr)`,
      }"
      tabindex="-1"
    >
      <div
        class="sticky top-0 row-start-1 row-end-2 col-start-1 -col-end-1 mb-5 bg-white rounded-md shadow-lg z-[3]"
        aria-hidden="true"
      ></div>
      <p
        v-for="(room, index) in rooms"
        :key="room"
        class="sticky top-0 row-start-1 row-end-2 mb-5 p-2 uppercase text-md text-center text-blue-800 rounded-sm z-[3]"
        :style="{
          gridColumnStart: index + 2,
          gridColumnEnd: index + 3,
        }"
        aria-hidden="true"
      >
        {{ room }}
      </p>
      <AgendaTimeInterval
        v-for="(interval, index) in timeintervals"
        :key="interval.format('HH:mm')"
        class="sticky left-0.5 col-start-1 col-end-2 -mt-[0.9rem] h-6 px-1 py-0.5 font-mono rounded-sm bg-yellow-300 z-[2] before:absolute before:h-[2px] before:top-1/2 before:-translate-y-1/2 before:w-[calc(var(--agenda-width)-1rem)] before:bg-yellow-300/25 before:-z-[1] isolate"
        :style="{
          gridRowStart: (index * intervalInMins) + 2,
          gridRowEnd: (index * intervalInMins) + 3,
        }"
      >
        {{ interval.format('HH:mm') }}
      </AgendaTimeInterval>
      <AgendaSession
        v-for="session in selectedDateSessions"
        :key="session.id"
        :href="`/session/${session.id}`"
        :class="cn(buttonVariants({ variant: 'outline' }), 'h-auto flex flex-col justify-start items-start gap-1 p-3 rounded-lg hover:shadow-lg hover:bg-gray-50 focus-visible:shadow-lg motion-safe:transition')"
        :style="{
          gridRowStart: getGridRow(session.time.start),
          gridRowEnd: getGridRow(session.time.end),
          gridColumnStart: session.room ? rooms.indexOf(session.room) + 2 : 2,
          gridColumnEnd: session.room ? rooms.indexOf(session.room) + 3 : -1,
        }"
      >
        <AgendaSessionMeta
          :start-time="session.time.start"
          :end-time="session.time.end"
          :location="session.room?.toUpperCase()"
          class="text-gray-600 z-[1]"
        />
        <AgendaSessionTitle class="text-[1rem] text-wrap z-[1]">
          {{ session.title }}
        </AgendaSessionTitle>
        <AgendaSessionSpeakers
          v-if="session.speakers.length > 0"
          class="flex flex-col gap-1 mt-2"
        >
          <AgendaSessionSpeaker
            v-for="speaker in session.speakers"
            :key="speaker.id"
            class="flex flex-row items-center gap-1 z-[1]"
          >
            <AgendaSessionSpeakerAvatar
              :src="speaker.avatar ?? ''"
              class="h-[32px] self-start aspect-square rounded-full text-transparent bg-slate-200"
            />
            <AgendaSessionSpeakerName class="text-wrap">
              {{ speaker.name }}
            </AgendaSessionSpeakerName>
          </AgendaSessionSpeaker>
        </AgendaSessionSpeakers>
        <AgendaSessionBookmarkButton class="mt-2 outline outline-1 outline-gray-200 hover:text-white hover:bg-black focus-visible:text-white focus-visible:bg-black">
          Bookmark
        </AgendaSessionBookmarkButton>
      </AgendaSession>
    </TabsContent>
  </Tabs>
</template>
