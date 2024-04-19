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
            <div class="flex items-start space-x-5">
              <form
                class="w-1/2 px-5 pt-4 pb-5 space-y-5 border rounded-l-2xl border-neutral-300"
                @submit.prevent="onCheckContrast"
              >
                <!-- FOREGROUND -->
                <div class="space-y-2">
                  <!--   <p class="pb-5 text-neutral-600">
                  <span class="text-2xl text-red-600">*</span> Indicates a
                  required field
                </p> -->

                  <div class="flex items-end space-x-3">
                    <!-- RGB -->
                    <div class="w-full space-y-1">
                      <!-- Label -->
                      <label for="foreground" class="text-base text-neutral-600"
                        >Foreground Colour (rgb)
                        <!-- <span class="text-2xl font-normal text-red-600">*</span> -->
                      </label>

                      <!-- Input -->
                      <AppInputColor
                        v-model="options.foreground"
                        :required="true"
                        name="foreground"
                        :default-value="options.foreground"
                        :sample-color="options.foreground"
                        :sample-alpha="options.foregroundAlpha"
                        class="w-full"
                      />
                    </div>

                    <!-- ALPHA -->
                    <div class="w-1/4 space-y-1">
                      <!-- Label -->
                      <label
                        for="foregroundAlpha"
                        class="text-base text-neutral-600"
                        >Alpha
                        <!-- <span class="text-2xl font-normal text-red-600">*</span> -->
                      </label>
                      <!-- Input alpha-->
                      <AppInput
                        v-model="options.foregroundAlpha"
                        :required="true"
                        type="number"
                        step=".01"
                        max="1"
                        name="foregroundAlpha"
                        :default-value="options.foregroundAlpha"
                      />
                    </div>
                  </div>
                </div>

                <!-- BACKGROUND -->
                <div class="space-y-2">
                  <div class="flex items-end space-x-3">
                    <!-- RGB -->
                    <div class="w-full space-y-1">
                      <!-- Label -->
                      <label for="background" class="text-base text-neutral-600"
                        >Background Colour (rgb)
                        <!-- <span class="text-2xl font-normal text-red-600">*</span> -->
                      </label>
                      <AppInputColor
                        v-model="options.background"
                        :required="true"
                        name="foreground"
                        :default-value="options.background"
                        :sample-color="options.background"
                        :sample-alpha="options.backgroundAlpha"
                        class="w-full"
                      />
                    </div>

                    <!-- ALPHA -->
                    <div class="w-1/4 space-y-1">
                      <!-- Label -->
                      <label
                        for="backgroundAlpha"
                        class="text-base text-neutral-600"
                      >
                        Alpha
                        <!-- <span class="text-2xl font-normal text-red-600">*</span> -->
                      </label>
                      <!-- Input alpha -->
                      <AppInput
                        v-model="options.backgroundAlpha"
                        :required="true"
                        type="number"
                        step=".01"
                        max="1"
                        name="backgroundAlpha"
                        :default-value="options.backgroundAlpha"
                      />
                    </div>
                  </div>
                </div>

                <!-- BUTTONS -->
                <div class="flex space-x-5">
                  <!-- BUTTON CHECK -->
                  <AppButton type="submit" label="CHECK" />

                  <!-- BUTTON CLEAR -->
                  <AppButton
                    variant="gost"
                    label="CLEAR"
                    @click="onClearInputs"
                  />

                  <!-- BUTTON SWITCH -->
                  <AppButton
                    variant="gost"
                    label="Switch"
                    @click="onSwitchColors"
                  />
                </div>
              </form>

              <!-- RESULTS -->
              <div
                class="w-1/2 p-5 space-y-5 border rounded-r-2xl border-neutral-300"
              >
                <!-- CONTRAST RATIO -->
                <div class="pb-3 text-2xl text-neutral-600">
                  <span class="font-bold"
                    >{{ ratio }}
                    <span class="font-normal">Contrast Ratio</span></span
                  >
                </div>

                <!-- <hr class="border-neutral-300" /> -->

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
                        AAA.includes('Fail')
                          ? 'text-red-600'
                          : 'text-green-700',
                      ]"
                      >{{ AAA }}</span
                    >
                  </div>

                  <div
                    :style="{
                      backgroundColor: `rgba(${resultBackground}, ${resultBackgroundAlpha})`,
                    }"
                    class="flex items-center w-full h-12 px-5 border border-neutral-300"
                  >
                    <p
                      :style="{
                        color: `rgba(${resultForegound}, ${resultForegroundAlpha})`,
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
                        AAA.includes('Fail')
                          ? 'text-red-600'
                          : 'text-green-700',
                      ]"
                      >{{ AAA }}</span
                    >
                  </div>

                  <div
                    :style="{
                      backgroundColor: `rgba(${resultBackground}, ${resultBackgroundAlpha})`,
                    }"
                    class="flex items-center w-full h-12 px-5 border border-neutral-300"
                  >
                    <p
                      :style="{
                        color: `rgba(${resultForegound}, ${resultForegroundAlpha})`,
                        fontSize: '18.66px',
                      }"
                      class="w-full font-bold line-clamp-1"
                    >
                      The quick brown fox jumps over the lazy dog.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- REF -->
            <ul
              class="px-5 py-4 space-y-2 text-base list-disc list-inside rounded-2xl text-neutral-600 bg-slate-100"
            >
              <div>NOTE</div>
              <li>
                <span class="font-bold">Large text</span> is defined as 14 point
                (typically 18.66px) and bold or larger, or 18 point (typically
                24px) or larger.
              </li>
              <li>
                <span class="font-bold">WCAG 2.0 level AA</span> requires a
                contrast ratio of at least 4.5:1 for normal text and 3:1 for
                large text.
              </li>
              <li>
                <span class="font-bold">WCAG 2.0 level AAA</span> requires a
                contrast ratio of at least 7:1 for normal text and 4.5:1 for
                large text.
              </li>

              <p class="pl-[22px]">
                Reference:
                <NuxtLink
                  to="https://webaim.org/resources/contrastchecker/"
                  external
                  target="blank"
                  class="a-link"
                >
                  WCAG 2.0
                </NuxtLink>
              </p>
            </ul>
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
  foreground: '255, 255, 255',
  foregroundAlpha: 1,
  background: '255, 255, 255',
  backgroundAlpha: 1,
  // fontSize: '16',
  // fontStyle: 'normal',
})

// Result
const resultForegound = ref('255, 255, 255')
const resultBackground = ref('255, 255, 255')
const resultForegroundAlpha = ref(1)
const resultBackgroundAlpha = ref(1)

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
  // Set result foreground alpha
  resultForegroundAlpha.value = options.value.foregroundAlpha
  // Set result background alpha
  resultBackgroundAlpha.value = options.value.backgroundAlpha

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
    foreground: '255, 255, 255',
    background: '255, 255, 255',
    foregroundAlpha: 1,
    backgroundAlpha: 1,
    fontSize: '16',
    fontStyle: 'normal',
  })

  // Set result foreground
  resultForegound.value = '255, 255, 255'
  // Set result background
  resultBackground.value = '255, 255, 255'

  // Options foreground/background
  options.value.foreground = '255, 255, 255'
  options.value.background = '255, 255, 255'
  // Options alpha
  options.value.foregroundAlpha = 1
  options.value.backgroundAlpha = 1

  // Set contrast ratio
  ratio.value = contrastRatio.value
  // Set AA
  AA.value = contrastAA.value
  // Set AAA
  AAA.value = contrastAAA.value
}

//

// SWITCH
const foregroundSwithced = ref(null)
const backgroundSwithced = ref(null)
function onSwitchColors() {
  foregroundSwithced.value = options.value.background
  backgroundSwithced.value = options.value.foreground
  //
  options.value.foreground = foregroundSwithced.value
  options.value.background = backgroundSwithced.value
}
</script>

<style lang="postcss" scoped></style>
