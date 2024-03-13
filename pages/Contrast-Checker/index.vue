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
          <section class="flex items-start space-x-10">
            <div
              class="w-1/2 p-5 space-y-10 border rounded-lg border-neutral-300"
            >
              <!-- FOREGROUND -->
              <div class="space-y-2">
                <div class="space-y-1">
                  <!-- Label -->
                  <label
                    for="foreground"
                    class="text-base font-bold text-neutral-600"
                    >Foreground Color</label
                  >
                  <!-- Input -->
                  <AppInput
                    v-model="options.foreground"
                    name="foreground"
                    :default-value="options.foreground"
                  />
                </div>
                <!-- Color sample -->
                <div
                  :style="{ backgroundColor: `${options.foreground}` }"
                  class="w-full h-12 border border-neutral-300"
                ></div>
              </div>

              <!-- BACKGROUND -->
              <div class="space-y-2">
                <div class="space-y-1">
                  <!-- Label -->
                  <label
                    for="background"
                    class="text-base font-bold text-neutral-600"
                    >Background Color</label
                  >
                  <!-- Input -->
                  <AppInput
                    v-model="options.background"
                    name="background"
                    :default-value="options.background"
                  />
                </div>
                <!-- Color sample -->
                <div
                  :style="{ backgroundColor: `${options.background}` }"
                  class="w-full h-12 border border-neutral-300"
                ></div>
              </div>

              <!-- BUTTONS -->
              <div class="flex space-x-5">
                <!-- BUTTON CHECK -->
                <AppButton label="CHECK" @click="onCheckContrast" />

                <!-- BUTTON CLEAR -->
                <AppButton
                  variant="gost"
                  label="CLEAR"
                  @click="onClearInputs"
                />
              </div>
            </div>

            <!-- RESULTS -->
            <div
              class="w-1/2 p-5 space-y-5 border rounded-lg border-neutral-300"
            >
              <!-- CONTRAST RATIO -->
              <div class="text-2xl text-neutral-600">
                <span class="font-bold"
                  >{{ ratio }}
                  <span class="font-normal">Contrast Ratio</span></span
                >
              </div>

              <hr class="border-neutral-300" />

              <!-- NORMAL TEXT -->
              <div class="space-y-1">
                <!-- Normal text -->
                <div class="space-x-3 text-base font-bold">
                  <span class="text-neutral-600">Normal text:</span>
                  <span
                    class="font-bold"
                    :class="[
                      AA.includes('Fail') ? 'text-red-600' : 'text-green-700',
                    ]"
                    >{{ AA }},</span
                  >
                  <span
                    class="font-bold"
                    :class="[
                      AAA.includes('Fail') ? 'text-red-600' : 'text-green-700',
                    ]"
                    >{{ AAA }}</span
                  >
                </div>

                <div
                  :style="{
                    backgroundColor: `${resultBackground}`,
                  }"
                  class="flex items-center w-full h-12 px-5 border border-neutral-300"
                >
                  <p
                    :style="{
                      color: `${resultForegound}`,
                      fontSize: '16px',
                      fontStyle: 'normal',
                    }"
                  >
                    The quick brown fox jumps over the lazy dog.
                  </p>
                </div>
              </div>

              <!-- LARGE TEXT -->
              <div class="space-y-1">
                <!-- Normal text -->
                <div class="space-x-3 text-base font-bold">
                  <span class="text-neutral-600">Large text:</span>
                  <span
                    class="font-bold"
                    :class="[
                      AA.includes('Fail') ? 'text-red-600' : 'text-green-700',
                    ]"
                    >{{ AA }},</span
                  >
                  <span
                    class="font-bold"
                    :class="[
                      AAA.includes('Fail') ? 'text-red-600' : 'text-green-700',
                    ]"
                    >{{ AAA }}</span
                  >
                </div>

                <div
                  :style="{ backgroundColor: `${resultBackground}` }"
                  class="flex items-center w-full h-12 px-5 border border-neutral-300"
                >
                  <p
                    :style="{
                      color: `${resultForegound}`,
                      fontSize: '18.66px',
                    }"
                    class="w-full font-bold line-clamp-1"
                  >
                    The quick brown fox jumps over the lazy dog.
                  </p>
                </div>
              </div>

              <!-- REF -->
              <div class="space-y-4 text-base text-neutral-600">
                <p>
                  <span class="font-bold">Large text</span> is defined as 14
                  point (typically 18.66px) and bold or larger, or 18 point
                  (typically 24px) or larger.
                </p>
                <p>
                  <span class="font-bold">WCAG 2.0 level AA</span> requires a
                  contrast ratio of at least 4.5:1 for normal text and 3:1 for
                  large text.
                </p>
                <p>
                  <span class="font-bold">WCAG 2.0 level AAA</span> requires a
                  contrast ratio of at least 7:1 for normal text and 4.5:1 for
                  large text.
                </p>
              </div>
            </div>
          </section>
        </div>
      </template>
    </NuxtLayout>
  </div>
</template>

<script>
export default {
  name: 'PageContrastChecker',
}
</script>

<script setup>
// Page title
const pageTitle = 'Contrast Checker'

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

// v-model
const options = ref({
  foreground: 'rgb(255, 255, 255)',
  background: 'rgb(255, 255, 255)',
  // fontSize: '16',
  // fontStyle: 'normal',
})

// Result
const resultForegound = ref('rgb(255, 255, 255)')
const resultBackground = ref('rgb(255, 255, 255)')

// Contrast ratio
const ratio = ref('---')
// AA
const AA = ref('')
// AAA
const AAA = ref('')

onMounted(() => {
  const { contrastRatio, contrastAA, contrastAAA } = useContrastChecker({
    ...options.value,
    fontSize: '16',
    fontStyle: 'normal',
  })
  // Set contrast ratio
  ratio.value = contrastRatio.value
  // Set AA
  AA.value = contrastAA.value
  // Set AAA
  AAA.value = contrastAAA.value
})

// Check contrast
function onCheckContrast() {
  const { contrastRatio, contrastAA, contrastAAA } = useContrastChecker({
    ...options.value,
    fontSize: '16',
    fontStyle: 'normal',
  })
  // Set result foreground
  resultForegound.value = options.value.foreground
  // Set result background
  resultBackground.value = options.value.background
  // Set contrast ratio
  ratio.value = contrastRatio.value
  // Set AA
  AA.value = contrastAA.value
  // Set AAA
  AAA.value = contrastAAA.value
}

// Clear inputs
function onClearInputs() {
  const { contrastRatio, contrastAA, contrastAAA } = useContrastChecker({
    foreground: 'rgb(255, 255, 255)',
    background: 'rgb(255, 255, 255)',
    fontSize: '16',
    fontStyle: 'normal',
  })

  // Set result foreground
  resultForegound.value = 'rgb(255, 255, 255)'
  // Set result background
  resultBackground.value = 'rgb(255, 255, 255)'

  // Options foreground/background
  options.value.foreground = 'rgb(255, 255, 255)'
  options.value.background = 'rgb(255, 255, 255)'
  // Set contrast ratio
  ratio.value = contrastRatio.value
  // Set AA
  AA.value = contrastAA.value
  // Set AAA
  AAA.value = contrastAAA.value
}
</script>

<style lang="postcss" scoped></style>
