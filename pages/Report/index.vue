<template>
  <div>
    <NuxtLayout name="main">
      <!-- MAIN -->
      <template #headline>
        <div class="space-y-10">
          <!-- HEADLINE H1 -->
          <h1 class="text-4xl font-bold">{{ pageTitle }}</h1>
        </div>
      </template>

      <!-- MAIN -->
      <template #main>
        <div class="space-y-10">
          <!-- SECTION 1 -->
          <section class="space-y-10">
            <table
              class="w-full border border-collapse table-auto border-neutral-300"
            >
              <!-- Caption -->
              <caption class="mb-2 text-base caption-top text-neutral-600">
                Survey results table.
              </caption>

              <!-- Head -->
              <thead>
                <tr class="text-base text-neutral-800">
                  <th class="p-3 text-left border border-neutral-300">
                    First Name
                  </th>
                  <th class="p-3 border border-neutral-300">Age</th>
                  <th class="p-3 text-left border border-neutral-300">
                    Ocupation
                  </th>
                  <th class="p-3 text-left border border-neutral-300">
                    Visual Capability
                  </th>
                  <th class="p-3 border border-neutral-300">
                    Sample 1
                    <!-- <div
                      class="w-full h-3 mt-1"
                      :style="{
                        backgroundColor: surveyColours.colourOne.foreground,
                      }"
                    ></div> -->
                  </th>

                  <th class="p-3 border border-neutral-300">
                    Sample 2
                    <!--  <div
                      class="w-full h-3 mt-1"
                      :style="{
                        backgroundColor: surveyColours.colourTwo.foreground,
                      }"
                    ></div> -->
                  </th>

                  <th class="p-3 border border-neutral-300">
                    Sample 3
                    <!--  <div
                      class="w-full h-3 mt-1"
                      :style="{
                        backgroundColor: surveyColours.colourThree.foreground,
                      }"
                    ></div> -->
                  </th>
                </tr>
              </thead>

              <!-- Body -->
              <tbody class="text-base text-neutral-600">
                <tr
                  v-for="result in surveyResults"
                  :key="result.name + new Date()"
                  class="text-left"
                >
                  <td class="px-3 py-2 border border-neutral-300">
                    {{ result.firstName }}
                  </td>
                  <td class="px-3 py-2 text-center border border-neutral-300">
                    {{ result.age }}
                  </td>
                  <td class="px-3 py-2 border border-neutral-300">
                    {{ result.ocupation }}
                  </td>
                  <td class="px-3 py-2 border border-neutral-300">
                    {{ result.visualCapability }}
                  </td>
                  <td class="px-3 py-2 text-center border border-neutral-300">
                    {{ resultScale(result.colourOne) }}
                  </td>
                  <td class="px-3 py-2 text-center border border-neutral-300">
                    {{ resultScale(result.colourTwo) }}
                  </td>
                  <td class="px-3 py-2 text-center border border-neutral-300">
                    {{ resultScale(result.colourThree) }}
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </template>
    </NuxtLayout>
  </div>
</template>

<script>
export default {
  name: 'PageReport',
}
</script>

<script setup>
// Assets
import surveyColours from '~/assets/surveyColours.json'

//

// Page title
const pageTitle = 'Report'

// PAGE HEAD
useHead({
  title: pageTitle,
  /*  bodyAttrs: {
    class: '',
  }, */
})

// PAGE META
definePageMeta({
  // Middleware
  // middleware: [],
})

//

// Get survey results from localStorage
const surveyResults = ref(
  JSON.parse(localStorage.getItem('surveyResults'))?.length
    ? JSON.parse(localStorage.getItem('surveyResults'))
    : []
)

// Result scale
const resultScale = (result) => {
  let scale
  if (result === 3) {
    scale = 'easy'
  }
  if (result === 2) {
    scale = 'moderate'
  }
  if (result === 1) {
    scale = 'difficult'
  }
  return scale
}
</script>

<style lang="postcss" scoped></style>
