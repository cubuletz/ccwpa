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
                  v-for="result in surveyResults"
                  :key="result.name"
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

          <!-- SECTION 2 -->
          <section class="space-y-10">
            <!-- Sample 1 pie chart -->
            <div
              class="px-5 pt-5 border display-inline-block border-neutral-300"
            >
              <div class="flex items-center justify-between">
                <div>
                  <!-- Caption -->
                  <div class="text-base font-bold text-neutral-800">
                    {{ activePieChartName }}
                  </div>
                  <p class="text-base text-neutral-600">
                    Distribution of results on the total number of respondents.
                  </p>
                </div>

                <div class="flex w-1/3 space-x-3">
                  <AppButton
                    :variant="
                      activePieChartName === 'Sample 1' ? 'solid' : 'gost'
                    "
                    label="Sample 1"
                    @click="
                      setActivePieChartData(dataSampleOne),
                        setActivePieChart('Sample 1')
                    "
                  />
                  <AppButton
                    :variant="
                      activePieChartName === 'Sample 2' ? 'solid' : 'gost'
                    "
                    label="Sample 2"
                    @click="
                      setActivePieChartData(dataSampleTwo),
                        setActivePieChart('Sample 2')
                    "
                  />
                  <AppButton
                    :variant="
                      activePieChartName === 'Sample 3' ? 'solid' : 'gost'
                    "
                    label="Sample 3"
                    @click="
                      setActivePieChartData(dataSampleThree),
                        setActivePieChart('Sample 3')
                    "
                  />
                </div>
              </div>
              <PieChart v-bind="configPieChart" :data="activeDataPieChart" />
            </div>
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

//
G2.registerTheme('custom-theme', {
  /* colors10: [
    surveyColours.colourOne.foreground,
    surveyColours.colourTwo.foreground,
    surveyColours.colourThree.foreground,
  ], */
  colors10: ['#006700', '#b38600', '#b30000'],
  /* colors20: [
    '#025DF4',
    '#DB6BCF',
    '#2498D1',
  ], */
})

/*
 ** PIE CHART
 */
// Chart config
const configPieChart = {
  // appendPadding: 10,
  angleField: 'value',
  colorField: 'type',
  radius: 0.8,
  label: {
    type: 'inner',
    offset: '-20%',
    content: '{percentage}',
    style: {
      fontSize: 16, // Change the font size here
      // textAlign: 'center',
    },
  },
  legend: {
    position: 'left',
    marker: {
      symbol: 'square',
    },
    itemName: {
      style: {
        fontSize: 14, // Change the font size here for legend items
      },
    },
  },
  tooltip: {
    formatter: (datum) => {
      return { name: datum.type, value: datum.value }
    },
  },
  interactions: [{ type: 'element-active' }],
  // use custom theme
  theme: 'custom-theme',
}

// Chart data sample 1
const dataSampleOne = computed(() => {
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
const dataSampleTwo = computed(() => {
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
const dataSampleThree = computed(() => {
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

// Active pie chart data
const activeDataPieChart = ref(dataSampleOne.value)
function setActivePieChartData(data) {
  activeDataPieChart.value = data
}
// Active pie chart name
const activePieChartName = ref('Sample 1')
function setActivePieChart(name) {
  activePieChartName.value = name
}
</script>

<style lang="postcss" scoped></style>
