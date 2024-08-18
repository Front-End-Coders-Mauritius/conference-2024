<script lang="ts" setup>
import customParseFormat from 'dayjs/plugin/customParseFormat'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { useDayjs } from '#dayjs'

const rooms = ['room1', 'room2'] as const

type Speaker = {
  id: string
  name: string
  avatar?: string
}

type Session = {
  id: string
  title: string
  time: {
    start: string
    end: string
  } // time should be in Mauritian time
  speakers: Array<Speaker>
  room?: typeof rooms[number]
  isBookmarked?: boolean
}

type SessionsByDate = Record<string, Array<Session>>

const dayjs = useDayjs()
dayjs.extend(customParseFormat)
dayjs.extend(isSameOrBefore)

// NOTE: Sessions should be in ascending order of their start time
const sessionsByDate = ref<SessionsByDate>({
  '2024-09-03': [
    {
      id: 'a1',
      title: 'Welcome to everyone',
      time: {
        start: '09:30',
        end: '10:00',
      },
      speakers: [{ id: 'a1', name: 'paul' }],
      room: 'room1',
      isBookmarked: false,
    },
  ],
  '2024-09-04': [
    {
      id: 'b1',
      title: 'Google Developer Q&A',
      time: {
        start: '10:10',
        end: '10:45',
      },
      speakers: [],
      room: 'room1',
      isBookmarked: false,
    },
    {
      id: 'bz',
      title: 'iOS Developer Q&A',
      time: {
        start: '10:10',
        end: '10:30',
      },
      speakers: [],
      room: 'room2',
      isBookmarked: false,
    },
    {
      id: 'b2',
      title: 'Amazon Web Services',
      time: {
        start: '10:45',
        end: '11:00',
      },
      speakers: [],
      room: 'room1',
      isBookmarked: false,
    },
    {
      id: 'b3',
      title: 'Intro to Vue.js',
      time: {
        start: '11:00',
        end: '11:42',
      },
      speakers: [],
      room: 'room2',
      isBookmarked: false,
    },
    {
      id: 'b4',
      title: 'Intro to Vue.js',
      time: {
        start: '11:45',
        end: '13:00',
      },
      speakers: [],
      room: 'room2',
      isBookmarked: false,
    },
  ],
})
const selectedDate = ref(Object.keys(sessionsByDate.value)[0])

const selectedDateSessions = computed(() => sessionsByDate.value[selectedDate.value])

function getIntervalTime(time: string, intervalInMins: number, operation: 'add' | 'subtract') {
  const parsedTime = dayjs(time, 'HH:mm')
  const timeIntervalOffset = operation === 'add' ? intervalInMins - ((parsedTime.minute() % intervalInMins) || intervalInMins) : parsedTime.minute() % intervalInMins
  const timeInterval = parsedTime[operation](timeIntervalOffset, 'minute')

  return timeInterval
}

const intervalInMins = 15
const timeintervals = computed(() => {
  const startTime = selectedDateSessions.value[0].time.start
  const endTime = selectedDateSessions.value.at(-1)?.time.end
  const startTimeInterval = getIntervalTime(startTime, intervalInMins, 'subtract')
  const endTimeInterval = getIntervalTime(endTime!, intervalInMins, 'add')
  const intervals = []
  let currentTimeInterval = startTimeInterval.clone()

  while (currentTimeInterval.isSameOrBefore(endTimeInterval)) {
    intervals.push(currentTimeInterval)
    currentTimeInterval = currentTimeInterval.add(intervalInMins, 'minute')
  }

  return intervals
})

const gridTemplateRows = computed(() => `auto ${[...Array(timeintervals.value.at(-1)!.diff(timeintervals.value[0], 'minute'))].map(() => 'auto').join(' ')}`)

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
  selectedDate.value = newSelectedDate as string
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
        gridTemplateRows,
        gridTemplateColumns: `auto repeat(${rooms.length}, 1fr)`,
      }"
      tabindex="-1"
    >
      <div
        class="sticky top-0 row-start-1 row-end-2 col-start-1 -col-end-1 mb-5 bg-green-200 rounded-md z-[3]"
        aria-hidden="true"
      ></div>
      <p
        v-for="(room, index) in rooms"
        :key="room"
        class="sticky top-0 row-start-1 row-end-2 mb-5 p-4 uppercase text-center rounded-sm z-[3]"
        :style="{
          gridColumnStart: index + 2,
          gridColumnEnd: index + 3,
        }"
        aria-hidden="true"
      >
        {{ room }}
      </p>
      <template
        v-for="(interval, index) in timeintervals"
        :key="interval"
      >
        <p
          class="sticky left-0.5 col-start-1 col-end-2 -mt-[0.9rem] h-6 px-1 py-0.5 font-mono rounded-sm bg-yellow-300 z-[2] before:absolute before:h-[2px] before:top-1/2 before:-translate-y-1/2 before:w-[calc(var(--agenda-width)-1rem)] before:bg-yellow-300/25 before:-z-[1] isolate"
          :style="{
            gridRowStart: (index * intervalInMins) + 2,
            gridRowEnd: (index * intervalInMins) + 3,
          }"
          aria-hidden="true"
        >
          {{ interval.format('HH:mm') }}
        </p>
      </template>
      <Button
        v-for="session in selectedDateSessions"
        :key="session.id"
        type="button"
        variant="outline"
        class="h-auto flex flex-col justify-start items-start p-3 rounded-lg"
        :style="{
          gridRowStart: getGridRow(session.time.start),
          gridRowEnd: getGridRow(session.time.end),
          gridColumnStart: session.room ? rooms.indexOf(session.room) + 2 : 2,
          gridColumnEnd: session.room ? rooms.indexOf(session.room) + 3 : -1,
        }"
      >
        <p class="z-[1]">
          {{ session.time.start }} - {{ session.time.end }}
        </p>
        <p class="z-[1]">
          {{ session.title }}
        </p>
        <p class="z-[1]">
          other info
        </p>
      </Button>
    </TabsContent>
  </Tabs>
</template>
