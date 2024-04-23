<template>
  <div>
    <NuxtLayout name="main">
      <!-- MAIN -->
      <template #headline>
        <div class="flex items-center justify-between">
          <!-- HEADLINE H1 -->
          <h1 class="text-4xl font-bold">{{ pageTitle }}</h1>
          <!-- DELETE DATA TODO: comment or remove -->
          <div class="w-1/6 p-0.5 border-[3px] border-red-600 rounded-2xl">
            <AppButton
              variant="gost"
              label="DELETE DATA"
              @click="onDeleteLocalStorage"
            />
          </div>
        </div>
      </template>

      <!-- MAIN -->
      <template #main>
        <div class="space-y-10">
          <!-- SECTION 1 -->
          <section class="space-y-10">
            <!-- Sample color -->
            <ul
              class="px-5 pt-1 pb-3 space-y-3 border divide-y border-neutral-300"
            >
              <li
                v-for="(item, index) in surveyColours"
                :key="index"
                class="flex items-center justify-between pt-3"
              >
                <!-- Color -->
                <div class="text-base font-bold">
                  Sample
                  {{
                    index === 'colourOne' ? 1 : index === 'colourTwo' ? 2 : 3
                  }}
                </div>
                <!-- Foreground -->
                <div
                  class="flex items-center space-x-2 text-base text-neutral-600"
                >
                  <span>Foreground</span>
                  <div
                    class="w-5 h-5"
                    :style="{
                      backgroundColor: item.foreground,
                    }"
                  ></div>
                  <span>{{ item.foreground }}</span>
                </div>

                <!-- Background -->
                <div
                  class="flex items-center space-x-2 text-base text-neutral-600"
                >
                  <span>Background</span>
                  <div
                    class="w-5 h-5 border border-neutral-300"
                    :style="{
                      backgroundColor: item.background,
                    }"
                  ></div>
                  <span>{{ item.background }}</span>
                </div>

                <!-- Contrast -->
                <div
                  class="flex items-center space-x-2 text-base text-neutral-600"
                >
                  <span>Contrast</span>
                  <span class="font-medium text-green-700">
                    {{ item.contrast }}</span
                  >
                </div>
              </li>
            </ul>

            <!-- Report table -->
            <table
              class="w-full border border-collapse table-auto border-neutral-300"
            >
              <!-- Caption -->
              <caption
                class="mb-2 text-base text-left caption-top text-neutral-600"
              >
                Survey results table
              </caption>

              <!-- Head -->
              <thead>
                <tr class="text-base text-neutral-800">
                  <th class="p-3 border border-neutral-300">No.</th>
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
                  <th class="p-3 border border-neutral-300">Sample 1</th>
                  <th class="p-3 border border-neutral-300">Sample 2</th>
                  <th class="p-3 border border-neutral-300">Sample 3</th>
                </tr>
              </thead>

              <!-- Body -->
              <tbody class="text-base text-neutral-600">
                <tr
                  v-for="(result, index) in surveyResults"
                  :key="result.name"
                  class="text-left"
                >
                  <td class="px-3 py-2 text-center border border-neutral-300">
                    {{ index + 1 }}
                  </td>
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

          <!-- SECTION 2 -->
          <section class="space-y-10">
            <!-- Chart distribution on total number of participants -->
            <ChartPie
              v-if="surveyResults.length"
              :data-sample-one="distributionOnTotalOne"
              :data-sample-two="distributionOnTotalTwo"
              :data-sample-three="distributionOnTotalThree"
              :participants-number="surveyResults.length"
              :total-participants="surveyResults.length"
              description="Distribution of results on the total number of participants"
            />

            <!-- Chart distribution on total number of participants with age below 40 -->
            <ChartPie
              v-if="surveyResults.length"
              :data-sample-one="distributionOnAgeBelowOne"
              :data-sample-two="distributionOnAgeBelowTwo"
              :data-sample-three="distributionOnAgeBelowThree"
              :participants-number="participantsOnAgeBelow"
              :total-participants="surveyResults.length"
              description="Distribution of results on the total number of participants with age below 40"
            />

            <!-- Chart distribution on total number of participants with age above 40 -->
            <ChartPie
              v-if="surveyResults.length"
              :data-sample-one="distributionOnAgeAboveOne"
              :data-sample-two="distributionOnAgeAboveTwo"
              :data-sample-three="distributionOnAgeAboveThree"
              :participants-number="participantsOnAgeAbove"
              :total-participants="surveyResults.length"
              description="Distribution of results on the total number of participants with age above 40"
            />

            <!-- Chart distribution on total number of participants with good visual capability -->
            <ChartPie
              v-if="surveyResults.length"
              :data-sample-one="distributionOnVisualGoodOne"
              :data-sample-two="distributionOnVisualGoodTwo"
              :data-sample-three="distributionOnVisualGoodThree"
              :participants-number="participantsOnVisualGood"
              :total-participants="surveyResults.length"
              description="Distribution of results on the total number of participants with good visual capability"
            />

            <!-- Chart distribution on total number of participants with bad visual capability -->
            <ChartPie
              v-if="surveyResults.length"
              :data-sample-one="distributionOnVisualBadOne"
              :data-sample-two="distributionOnVisualBadTwo"
              :data-sample-three="distributionOnVisualBadThree"
              :participants-number="participantsOnVisualBad"
              :total-participants="surveyResults.length"
              description="Distribution of results on the total number of participants with bad visual capability"
            />
          </section>
        </div>
      </template>
    </NuxtLayout>
  </div>
</template>

<script>
// Charts
import { LineChart, BarChart, PieChart } from '@opd/g2plot-vue'
import { G2 } from '@antv/g2plot'

export default {
  name: 'PageReport',

  // Components
  components: [PieChart, LineChart],
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

// Delete localStorage 'surveyResults' data
// TODO: remove or comment
function onDeleteLocalStorage() {
  localStorage.removeItem('surveyResults')
  surveyResults.value = []
}

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
    scale = 'difficult'
  }
  if (result === 2) {
    scale = 'moderate'
  }
  if (result === 1) {
    scale = 'easy'
  }
  return scale
}

//

/*
 ** CHART DISTRIBUTION ON TOTAL NUMBER OF PARTICIPANTS
 */
// Chart data sample 1
const distributionOnTotalOne = computed(() => {
  let data = []
  let easyNr = 0
  let moderateNr = 0
  let difficultNr = 0
  surveyResults.value.forEach((item) => {
    item.colourOne === 1 ? easyNr++ : null
    item.colourOne === 2 ? moderateNr++ : null
    item.colourOne === 3 ? difficultNr++ : null
  })
  easyNr &&
    data.push({
      type: 'easy',
      value: easyNr,
    })
  moderateNr &&
    data.push({
      type: 'moderate',
      value: moderateNr,
    })
  difficultNr &&
    data.push({
      type: 'difficult',
      value: difficultNr,
    })
  return data
})
// Chart data sampler 2
const distributionOnTotalTwo = computed(() => {
  let data = []
  let easyNr = 0
  let moderateNr = 0
  let difficultNr = 0
  surveyResults.value.forEach((item) => {
    item.colourTwo === 1 ? easyNr++ : null
    item.colourTwo === 2 ? moderateNr++ : null
    item.colourTwo === 3 ? difficultNr++ : null
  })
  easyNr &&
    data.push({
      type: 'easy',
      value: easyNr,
    })
  moderateNr &&
    data.push({
      type: 'moderate',
      value: moderateNr,
    })
  difficultNr &&
    data.push({
      type: 'difficult',
      value: difficultNr,
    })
  return data
})
// Chart data sample 3
const distributionOnTotalThree = computed(() => {
  let data = []
  let easyNr = 0
  let moderateNr = 0
  let difficultNr = 0
  surveyResults.value.forEach((item) => {
    item.colourThree === 1 ? easyNr++ : null
    item.colourThree === 2 ? moderateNr++ : null
    item.colourThree === 3 ? difficultNr++ : null
  })
  easyNr &&
    data.push({
      type: 'easy',
      value: easyNr,
    })
  moderateNr &&
    data.push({
      type: 'moderate',
      value: moderateNr,
    })
  difficultNr &&
    data.push({
      type: 'difficult',
      value: difficultNr,
    })
  return data
})

//

/*
 ** CHART DISTRIBUTION ON TOTAL NUMBER OF PARTICIPANTS WITH AGE BELOW 40
 */
// Number of participants
const participantsOnAgeBelow = computed(() => {
  return surveyResults.value.filter((item) => item.age <= 40).length
})
// Chart data sample 1
const distributionOnAgeBelowOne = computed(() => {
  let data = []
  let easyNr = 0
  let moderateNr = 0
  let difficultNr = 0
  surveyResults.value.forEach((item) => {
    if (item.age <= 40) {
      item.colourOne === 1 ? easyNr++ : null
      item.colourOne === 2 ? moderateNr++ : null
      item.colourOne === 3 ? difficultNr++ : null
    }
  })
  easyNr &&
    data.push({
      type: 'easy',
      value: easyNr,
    })
  moderateNr &&
    data.push({
      type: 'moderate',
      value: moderateNr,
    })
  difficultNr &&
    data.push({
      type: 'difficult',
      value: difficultNr,
    })
  return data
})
// Chart data sample 2
const distributionOnAgeBelowTwo = computed(() => {
  let data = []
  let easyNr = 0
  let moderateNr = 0
  let difficultNr = 0
  surveyResults.value.forEach((item) => {
    if (item.age <= 40) {
      item.colourTwo === 1 ? easyNr++ : null
      item.colourTwo === 2 ? moderateNr++ : null
      item.colourTwo === 3 ? difficultNr++ : null
    }
  })
  easyNr &&
    data.push({
      type: 'easy',
      value: easyNr,
    })
  moderateNr &&
    data.push({
      type: 'moderate',
      value: moderateNr,
    })
  difficultNr &&
    data.push({
      type: 'difficult',
      value: difficultNr,
    })
  return data
})
// Chart data sample 3
const distributionOnAgeBelowThree = computed(() => {
  let data = []
  let easyNr = 0
  let moderateNr = 0
  let difficultNr = 0
  surveyResults.value.forEach((item) => {
    if (item.age <= 40) {
      item.colourThree === 1 ? easyNr++ : null
      item.colourThree === 2 ? moderateNr++ : null
      item.colourThree === 3 ? difficultNr++ : null
    }
  })
  easyNr &&
    data.push({
      type: 'easy',
      value: easyNr,
    })
  moderateNr &&
    data.push({
      type: 'moderate',
      value: moderateNr,
    })
  difficultNr &&
    data.push({
      type: 'difficult',
      value: difficultNr,
    })
  return data
})

//

/*
 ** CHART DISTRIBUTION ON TOTAL NUMBER OF PARTICIPANTS WITH AGE ABOVE 40
 */
// Number of participants
const participantsOnAgeAbove = computed(() => {
  return surveyResults.value.filter((item) => item.age > 40).length
})
// Chart data sample 1
const distributionOnAgeAboveOne = computed(() => {
  let data = []
  let easyNr = 0
  let moderateNr = 0
  let difficultNr = 0
  surveyResults.value.forEach((item) => {
    if (item.age > 40) {
      item.colourOne === 1 ? easyNr++ : null
      item.colourOne === 2 ? moderateNr++ : null
      item.colourOne === 3 ? difficultNr++ : null
    }
  })
  easyNr &&
    data.push({
      type: 'easy',
      value: easyNr,
    })
  moderateNr &&
    data.push({
      type: 'moderate',
      value: moderateNr,
    })
  difficultNr &&
    data.push({
      type: 'difficult',
      value: difficultNr,
    })
  return data
})
// Chart data sample 2
const distributionOnAgeAboveTwo = computed(() => {
  let data = []
  let easyNr = 0
  let moderateNr = 0
  let difficultNr = 0
  surveyResults.value.forEach((item) => {
    if (item.age > 40) {
      item.colourTwo === 1 ? easyNr++ : null
      item.colourTwo === 2 ? moderateNr++ : null
      item.colourTwo === 3 ? difficultNr++ : null
    }
  })
  easyNr &&
    data.push({
      type: 'easy',
      value: easyNr,
    })
  moderateNr &&
    data.push({
      type: 'moderate',
      value: moderateNr,
    })
  difficultNr &&
    data.push({
      type: 'difficult',
      value: difficultNr,
    })
  return data
})
// Chart data sample 3
const distributionOnAgeAboveThree = computed(() => {
  let data = []
  let easyNr = 0
  let moderateNr = 0
  let difficultNr = 0
  surveyResults.value.forEach((item) => {
    if (item.age > 40) {
      item.colourThree === 1 ? easyNr++ : null
      item.colourThree === 2 ? moderateNr++ : null
      item.colourThree === 3 ? difficultNr++ : null
    }
  })
  easyNr &&
    data.push({
      type: 'easy',
      value: easyNr,
    })
  moderateNr &&
    data.push({
      type: 'moderate',
      value: moderateNr,
    })
  difficultNr &&
    data.push({
      type: 'difficult',
      value: difficultNr,
    })
  return data
})

//

/*
 ** CHART DISTRIBUTION ON TOTAL NUMBER OF PARTICIPANTS WITH GOOD VISUAL CAPABILITY
 */
// Number of participants
const participantsOnVisualGood = computed(() => {
  return surveyResults.value.filter((item) => item.visualCapability === 'Good')
    .length
})
// Chart data sample 1
const distributionOnVisualGoodOne = computed(() => {
  let data = []
  let easyNr = 0
  let moderateNr = 0
  let difficultNr = 0
  surveyResults.value.forEach((item) => {
    if (item.visualCapability === 'Good') {
      item.colourOne === 1 ? easyNr++ : null
      item.colourOne === 2 ? moderateNr++ : null
      item.colourOne === 3 ? difficultNr++ : null
    }
  })
  easyNr &&
    data.push({
      type: 'easy',
      value: easyNr,
    })
  moderateNr &&
    data.push({
      type: 'moderate',
      value: moderateNr,
    })
  difficultNr &&
    data.push({
      type: 'difficult',
      value: difficultNr,
    })
  return data
})
// Chart data sample 2
const distributionOnVisualGoodTwo = computed(() => {
  let data = []
  let easyNr = 0
  let moderateNr = 0
  let difficultNr = 0
  surveyResults.value.forEach((item) => {
    if (item.visualCapability === 'Good') {
      item.colourTwo === 1 ? easyNr++ : null
      item.colourTwo === 2 ? moderateNr++ : null
      item.colourTwo === 3 ? difficultNr++ : null
    }
  })
  easyNr &&
    data.push({
      type: 'easy',
      value: easyNr,
    })
  moderateNr &&
    data.push({
      type: 'moderate',
      value: moderateNr,
    })
  difficultNr &&
    data.push({
      type: 'difficult',
      value: difficultNr,
    })
  return data
})
// Chart data sample 3
const distributionOnVisualGoodThree = computed(() => {
  let data = []
  let easyNr = 0
  let moderateNr = 0
  let difficultNr = 0
  surveyResults.value.forEach((item) => {
    if (item.visualCapability === 'Good') {
      item.colourThree === 1 ? easyNr++ : null
      item.colourThree === 2 ? moderateNr++ : null
      item.colourThree === 3 ? difficultNr++ : null
    }
  })
  easyNr &&
    data.push({
      type: 'easy',
      value: easyNr,
    })
  moderateNr &&
    data.push({
      type: 'moderate',
      value: moderateNr,
    })
  difficultNr &&
    data.push({
      type: 'difficult',
      value: difficultNr,
    })
  return data
})

//

/*
 ** CHART DISTRIBUTION ON TOTAL NUMBER OF PARTICIPANTS WITH BAD VISUAL CAPABILITY
 */
// Number of participants
const participantsOnVisualBad = computed(() => {
  return surveyResults.value.filter((item) => item.visualCapability === 'Bad')
    .length
})
// Chart data sample 1
const distributionOnVisualBadOne = computed(() => {
  let data = []
  let easyNr = 0
  let moderateNr = 0
  let difficultNr = 0
  surveyResults.value.forEach((item) => {
    if (item.visualCapability === 'Bad') {
      item.colourOne === 1 ? easyNr++ : null
      item.colourOne === 2 ? moderateNr++ : null
      item.colourOne === 3 ? difficultNr++ : null
    }
  })
  easyNr &&
    data.push({
      type: 'easy',
      value: easyNr,
    })
  moderateNr &&
    data.push({
      type: 'moderate',
      value: moderateNr,
    })
  difficultNr &&
    data.push({
      type: 'difficult',
      value: difficultNr,
    })
  return data
})
// Chart data sample 2
const distributionOnVisualBadTwo = computed(() => {
  let data = []
  let easyNr = 0
  let moderateNr = 0
  let difficultNr = 0
  surveyResults.value.forEach((item) => {
    if (item.visualCapability === 'Bad') {
      item.colourTwo === 1 ? easyNr++ : null
      item.colourTwo === 2 ? moderateNr++ : null
      item.colourTwo === 3 ? difficultNr++ : null
    }
  })
  easyNr &&
    data.push({
      type: 'easy',
      value: easyNr,
    })
  moderateNr &&
    data.push({
      type: 'moderate',
      value: moderateNr,
    })
  difficultNr &&
    data.push({
      type: 'difficult',
      value: difficultNr,
    })
  return data
})
// Chart data sample 3
const distributionOnVisualBadThree = computed(() => {
  let data = []
  let easyNr = 0
  let moderateNr = 0
  let difficultNr = 0
  surveyResults.value.forEach((item) => {
    if (item.visualCapability === 'Bad') {
      item.colourThree === 1 ? easyNr++ : null
      item.colourThree === 2 ? moderateNr++ : null
      item.colourThree === 3 ? difficultNr++ : null
    }
  })
  easyNr &&
    data.push({
      type: 'easy',
      value: easyNr,
    })
  moderateNr &&
    data.push({
      type: 'moderate',
      value: moderateNr,
    })
  difficultNr &&
    data.push({
      type: 'difficult',
      value: difficultNr,
    })
  return data
})
</script>

<style lang="postcss" scoped></style>
