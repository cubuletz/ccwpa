<template>
  <div class="px-5 pt-5 border display-inline-block border-neutral-300">
    <div class="flex items-start justify-between">
      <div>
        <!-- Caption -->
        <div class="text-base font-bold text-neutral-800">
          {{ activeChartName }}
        </div>
        <p class="text-base text-neutral-600">
          {{ description }}
        </p>
        <div class="text-base text-purple-800">
          Pariticipants: {{ participantsNumber }} / {{ totalParticipants }}
          <!-- {{ participantsNumber > 1 ? 'participants' : 'participant' }} -->
        </div>
      </div>

      <!-- Select -->
      <div class="w-1/4">
        <AppSelect
          v-model="activeChartName"
          default-value="Sample 1"
          name="pieChart"
          :options="['Sample 1', 'Sample 2', 'Sample 3']"
        />
      </div>
    </div>
    <!-- Pie chart -->
    <PieChart v-bind="config" :data="dataComputed" />
  </div>
</template>

<script>
// Charts
import { PieChart } from '@opd/g2plot-vue'
import { G2 } from '@antv/g2plot'

export default {
  name: 'ChartPie',

  // Components
  components: [PieChart],
}
</script>

<script setup>
// PROPS
const props = defineProps({
  // Data sample 1
  dataSampleOne: {
    type: Array,
    default: () => [],
  },
  // Data sample 2
  dataSampleTwo: {
    type: Array,
    default: () => [],
  },
  // Data sample 3
  dataSampleThree: {
    type: Array,
    default: () => [],
  },
  // Chart description
  description: {
    type: String,
    default: 'Description',
  },
  // Participants number
  participantsNumber: {
    type: Number,
    default: 0,
  },
  // Total participants
  totalParticipants: {
    type: Number,
    default: 0,
  },
})

// v-model
const activeChartName = ref('Sample 1')

// Data computed
const dataComputed = computed(() => {
  let data
  if (activeChartName.value === 'Sample 1') {
    data = props.dataSampleOne
  }
  if (activeChartName.value === 'Sample 2') {
    data = props.dataSampleTwo
  }
  if (activeChartName.value === 'Sample 3') {
    data = props.dataSampleThree
  }
  return data
})

// Chart theme
G2.registerTheme('custom-theme', {
  colors10: ['#006700', '#b38600', '#b30000'],
  /* colors20: [
    '#025DF4',
    '#DB6BCF',
    '#2498D1',
  ], */
})

// Chart config
const config = {
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
      return {
        name: datum.type,
        value: `${datum.value} ${
          datum.value === 1 ? 'participant' : 'participants'
        }`,
      }
    },
  },
  interactions: [{ type: 'element-active' }],
  // use custom theme
  theme: 'custom-theme',
}
</script>

<style lang="postcss" scoped></style>
