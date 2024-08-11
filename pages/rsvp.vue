<script setup lang="ts">
import * as z from "zod";
import { h } from "vue";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/toast";
import { AutoForm, AutoFormField } from "@/components/ui/auto-form";

const submitted = ref(false);

enum specializations {
  Frontend = "Frontend",
  Backend = "Backend",
  Fullstack = "Fullstack",
  DevOps = "DevOps",
  Mobile = "Mobile",
  None = "I don't know",
}

enum transport {
  Car = "Car",
  Bus = "Bus",
  Train = "Train",
  Plane = "Plane",
  None = "I don't travel",
}

enum regions {
  North = "North",
  South = "South",
  East = "East",
  West = "West",
  Central = "Central",
}

enum days {
  day_1 = "Day 1",
  day_2 = "Day 2",
  day_3 = "Day 3",
}

const schema = z.object({
  firstName: z
    .string({
      required_error: "First name is required.",
    })
    .min(2, {
      message: "First name must be at least 2 characters.",
    }),
  lastName: z
    .string({
      required_error: "Last name is required.",
    })
    .min(2, {
      message: "Last name must be at least 2 characters.",
    }),
  Company: z
    .string({
      required_error: "Company is required.",
    })
    .min(2, {
      message: "Company must be at least 2 characters.",
    })
    .optional(),

  jobTitle: z
    .string({
      required_error: "Job title is required.",
    })
    .min(2, {
      message: "Job title must be at least 2 characters.",
    })
    .optional(),
  specializations: z
    .nativeEnum(specializations)
    .describe("What is your specialization?"),
  transport: z.nativeEnum(transport).describe("How are you getting there?"),
  region: z.nativeEnum(regions).describe("Which region are you from?"),

  phoneNumber: z.coerce
    .number({
      invalid_type_error: "Phone number must be a number.",
    })
    .default(8)
    .optional(),

  days: z.enum(["friday", "saturday", "Both days"]),
  consent: z.boolean().optional(),
  // consent: z.boolean().refine((value) => value, {
  //   message: "You must accept the terms and conditions.",
  //   path: ["acceptTerms"],
  // }),
});

function onSubmit(values: Record<string, any>) {
  toast({
    title: "You submitted the following values:",
    description: h(
      "pre",
      { class: "mt-2 w-[340px] rounded-md bg-slate-950 p-4" },
      h("code", { class: "text-white" }, JSON.stringify(values, null, 2))
    ),
  });
  submitted.value = true;
}
</script>

<template>
  <NuxtLayout>
    <Container v-if="true" class="py-20 sm:py-32">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl">
          RSVP
        </h2>
        <p class="mt-4 font-display text-2xl tracking-tight text-blue-900">
          RSVP to our event by filling out the form below. We can't wait to see
          you there! 🎉
        </p>
      </div>
      <AutoForm
        class="lg:grid grid-cols-2 gap-x-12 gap-8 space-y-8 my-8 lg:space-y-0 rounded-lg w-full ring-0.5 ring- p-8 shadow-lg shadow-blue-200"
        :schema="schema" :field-config="{
          phoneNumber: {},
          Company: {
            label: 'Company name',
            inputProps: {
              placeholder: 'What`s your company name?',
            },
          },
          jobTitle: {
            label: 'Job title',
            inputProps: {
              placeholder: 'What`s your job title?',
            },
          },
          specializations: {
            component: 'select',
            inputProps: {
              placeholder: 'Pick your specialization',
            },
          },
          region: {
            description: 'Pick your region',
            component: 'select',

            inputProps: {
              placeholder: 'Pick your region',
              checked: ['North', 'South'],
            },
          },

          consent: {
            component: 'switch',
          },

          days: {
            label: 'Which day are you attending?',
            component: 'radio',
          },
        }" @submit="onSubmit">
        <template #consent="slotProps">
          <div>
            <AutoFormField v-bind="slotProps" />
            <div class="!mt-2 text-sm text-blue-900">
              I agree to the
              <button class="text-primary underline text-blue-900">
                terms and conditions</button>.
            </div>
          </div>
        </template>

        <div class="flex justify-center items-center col-span-2">
          <Button type="submit" class="bg-blue-600 hover:bg-blue-500 py-4 px-6 text-md rounded-2xl font-semibold">
            Submit
          </Button>
        </div>
      </AutoForm>
    </Container>

    <Container v-else class="flex flex-col justify-center items-center mt-40">
      <div class="mx-auto max-w-2xl lg:mx-0 flex flex-col justify-center gap-4 py-8">
        <h2 class="font-display text-xl font-medium tracking-tighter text-blue-600 sm:text-5xl">
          RSVP
          <span class="text-green-500">Successful 🎉</span>
        </h2>
        <Button class="bg-blue-600 hover:bg-blue-500 text-2xl py-6 px-8">
          View my ticket
        </Button>
      </div>
    </Container>
  </NuxtLayout>
</template>
