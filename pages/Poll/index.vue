<template>
  <div>
    <NuxtLayout name="main">
      <!-- MAIN -->
      <template #headline>
        <div class="flex items-start space-x-2">
          <!-- HEADLINE H1 -->
          <h1 class="text-4xl font-bold">{{ pageTitle }}</h1>

          <!-- Poll -->
          <div class="font-bold text-neutral-600">
            {{ pollResults?.length }}
          </div>
        </div>
      </template>

      <!-- MAIN -->
      <template #main>
        <div class="space-y-10">
          <!-- SECTION 1 -->
          <section class="w-1/2 space-y-5">
            <!-- Form -->
            <form class="space-y-5" @submit.prevent="onSubmitForm">
              <!-- Name & Age -->
              <div class="flex items-end space-x-5">
                <!-- First name -->
                <div class="w-full space-y-1">
                  <label for="firstName" class="text-base text-neutral-600"
                    >First Name</label
                  >
                  <AppInput
                    v-model="firstName"
                    name="firstName"
                    :required="true"
                  />
                </div>

                <!-- Age -->
                <div class="w-full space-y-1">
                  <label for="age" class="text-base text-neutral-600"
                    >Age</label
                  >
                  <AppInput
                    v-model="age"
                    type="number"
                    min="1"
                    name="age"
                    :required="true"
                  />
                </div>
              </div>

              <!-- Ocupation & Visual capability -->
              <div class="flex items-end space-x-5">
                <!-- First name -->
                <div class="w-full space-y-1">
                  <label for="ocupation" class="text-base text-neutral-600"
                    >Ocupation</label
                  >
                  <AppSelect
                    v-model="ocupation"
                    name="ocupation"
                    :options="ocupations"
                    :required="true"
                  />
                  <!-- <AppInput
                    v-model="ocupation"
                    name="ocupation"
                    :required="true"
                  /> -->
                </div>

                <!-- Age -->
                <div class="w-full space-y-1">
                  <label
                    for="visualCapability"
                    class="text-base text-neutral-600"
                    >Visual Capability</label
                  >
                  <AppSelect
                    v-model="visualCapability"
                    name="visualCapability"
                    :options="['Good', 'Bad']"
                    :required="true"
                  />
                  <!--  <AppInput
                    v-model="visualCapability"
                    name="visualCapability"
                    :required="true"
                  /> -->
                </div>
              </div>

              <!-- *** 1st -->
              <div
                class="px-5 pt-5 pb-4 space-y-4 border rounded-2xl border-neutral-300"
              >
                <div class="flex items-center">
                  <div
                    class="w-full h-16 flex items-center justify-center bg-[#FFFFFF] border-none border-neutral-200"
                  >
                    <p class="text-base text-[#707070]">
                      The quick brown fox jumps over the lazy dog.
                    </p>
                  </div>
                </div>

                <!-- Color One -->
                <fieldset
                  name="color_one"
                  class="flex items-center mx-auto space-x-5 w-max"
                >
                  <!-- Poor -->
                  <div class="flex items-center space-x-1">
                    <input
                      v-model="colorOne"
                      type="radio"
                      id="color_one"
                      name="color_one"
                      :value="1"
                      :required="true"
                      class="w-5 h-5 cursor-pointer"
                    />
                    <label
                      for="color_one"
                      class="text-base cursor-pointer text-neutral-600"
                    >
                      Easy
                    </label>
                  </div>

                  <!-- Good -->
                  <div class="flex items-center space-x-1">
                    <input
                      v-model="colorOne"
                      type="radio"
                      id="color_one"
                      name="color_one"
                      :value="2"
                      :required="true"
                      class="w-5 h-5 cursor-pointer"
                    />
                    <label
                      for="color_one"
                      class="text-base cursor-pointer text-neutral-600"
                    >
                      Moderate
                    </label>
                  </div>

                  <!-- Very Good -->
                  <div class="flex items-center space-x-1">
                    <input
                      v-model="colorOne"
                      type="radio"
                      id="color_one"
                      name="color_one"
                      :value="3"
                      :required="true"
                      class="w-5 h-5 cursor-pointer"
                    />
                    <label
                      for="color_one"
                      class="text-base cursor-pointer text-neutral-600"
                    >
                      Difficult
                    </label>
                  </div>
                </fieldset>
              </div>

              <!-- *** 2nd -->
              <div
                class="px-5 pt-5 pb-4 space-y-4 border rounded-2xl border-neutral-300"
              >
                <div class="flex items-center">
                  <div
                    class="w-full h-16 flex items-center justify-center bg-[#FFFFFF] border-none border-neutral-200"
                  >
                    <p class="text-base text-[#6AA84F]">
                      The quick brown fox jumps over the lazy dog.
                    </p>
                  </div>
                </div>

                <!-- Color Two -->
                <fieldset
                  name="color_two"
                  class="flex items-center mx-auto space-x-5 w-max"
                >
                  <!-- Poor -->
                  <div class="flex items-center space-x-1">
                    <input
                      v-model="colorTwo"
                      type="radio"
                      id="color_two"
                      name="color_two"
                      :value="1"
                      :required="true"
                      class="w-5 h-5 cursor-pointer"
                    />
                    <label
                      for="color_two"
                      class="text-base cursor-pointer text-neutral-600"
                    >
                      Easy
                    </label>
                  </div>

                  <!-- Good -->
                  <div class="flex items-center space-x-1">
                    <input
                      v-model="colorTwo"
                      type="radio"
                      id="color_two"
                      name="color_two"
                      :value="2"
                      :required="true"
                      class="w-5 h-5 cursor-pointer"
                    />
                    <label
                      for="color_two"
                      class="text-base cursor-pointer text-neutral-600"
                    >
                      Moderate
                    </label>
                  </div>

                  <!-- Very Good -->
                  <div class="flex items-center space-x-1">
                    <input
                      v-model="colorTwo"
                      type="radio"
                      id="color_two"
                      name="color_two"
                      :value="3"
                      :required="true"
                      class="w-5 h-5 cursor-pointer"
                    />
                    <label
                      for="color_two"
                      class="text-base cursor-pointer text-neutral-600"
                    >
                      Difficult
                    </label>
                  </div>
                </fieldset>
              </div>

              <!-- *** 3nd -->
              <div
                class="px-5 pt-5 pb-4 space-y-4 border rounded-2xl border-neutral-300"
              >
                <div class="flex items-center">
                  <div
                    class="w-full h-16 flex items-center justify-center bg-[#FFFFFF] border-none border-neutral-200"
                  >
                    <p class="text-base text-[#3D85C6]">
                      The quick brown fox jumps over the lazy dog.
                    </p>
                  </div>
                </div>

                <!-- Color Three -->
                <fieldset
                  name="color_three"
                  class="flex items-center mx-auto space-x-5 w-max"
                >
                  <!-- Poor -->
                  <div class="flex items-center space-x-1">
                    <input
                      v-model="colorThree"
                      type="radio"
                      id="color_three"
                      name="color_three"
                      :value="1"
                      :required="true"
                      class="w-5 h-5 cursor-pointer"
                    />
                    <label
                      for="color_three"
                      class="text-base cursor-pointer text-neutral-600"
                    >
                      Easy
                    </label>
                  </div>

                  <!-- Good -->
                  <div class="flex items-center space-x-1">
                    <input
                      v-model="colorThree"
                      type="radio"
                      id="color_three"
                      name="color_three"
                      :value="2"
                      :required="true"
                      class="w-5 h-5 cursor-pointer"
                    />
                    <label
                      for="color_three"
                      class="text-base cursor-pointer text-neutral-600"
                    >
                      Moderate
                    </label>
                  </div>

                  <!-- Very Good -->
                  <div class="flex items-center space-x-1">
                    <input
                      v-model="colorThree"
                      type="radio"
                      id="color_three"
                      name="color_three"
                      :value="3"
                      :required="true"
                      class="w-5 h-5 cursor-pointer"
                    />
                    <label
                      for="color_three"
                      class="text-base cursor-pointer text-neutral-600"
                    >
                      Difficult
                    </label>
                  </div>
                </fieldset>
              </div>

              <!-- Action buttons -->
              <div class="flex space-x-5">
                <AppButton type="submit" label="SUMBIT" />
                <AppButton
                  variant="gost"
                  label="CANCEL"
                  @click="onCancelForm"
                />
              </div>

              <!-- Button clear local storage TODO: remove or comment -->
              <AppButton
                variant="gost"
                label="CLEAN LOCAL STORAGE"
                @click="onCleanLocalStorage"
              />

              <!-- Alert feedback -->
              <!-- <div
                v-if="isFeedbackVisible"
                class="px-4 py-3 text-base text-green-700 border border-green-600"
              >
                Successfully submitted. Thanks for your feedback.
              </div> -->
            </form>
          </section>
        </div>
      </template>
    </NuxtLayout>
  </div>
</template>

<script>
export default {
  name: 'PagePoll',
}
</script>

<script setup>
// Ocupations
import ocupations from '~/assets/occupations.json'

//

// Page title
const pageTitle = 'Poll'

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
const firstName = ref('')
const age = ref(null)
const ocupation = ref('')
const visualCapability = ref('')
//
const colorOne = ref(null)
const colorTwo = ref(null)
const colorThree = ref(null)

// Feddback message
// const isFeedbackVisible = ref(false)
// Hide feedback message
/* watch(firstName, () => (isFeedbackVisible.value = false))
watch(age, () => (isFeedbackVisible.value = false))
watch(ocupation, () => (isFeedbackVisible.value = false))
watch(visualCapability, () => (isFeedbackVisible.value = false))
watch(colorOne, () => (isFeedbackVisible.value = false))
watch(colorTwo, () => (isFeedbackVisible.value = false))
watch(colorThree, () => (isFeedbackVisible.value = false)) */

// Submit form
function onSubmitForm() {
  pollResults.value.push({
    firstName: firstName.value,
    age: age.value,
    ocupation: ocupation.value,
    visualCapability: visualCapability.value,
    //
    colorOne: colorOne.value,
    colorTwo: colorTwo.value,
    colorThree: colorThree.value,
  })
  // Save pollResults on localStorage
  localStorage.setItem('pollResults', JSON.stringify(pollResults.value))

  // Reset form
  onCancelForm()

  // Show feedback message
  // isFeedbackVisible.value = true
}

// Cancel form
function onCancelForm() {
  firstName.value = ''
  age.value = ''
  ocupation.value = ''
  visualCapability.value = ''
  //
  colorOne.value = null
  colorTwo.value = null
  colorThree.value = null

  // Hide feedback message
  // isFeedbackVisible.value = false
}

//

// Get poll results from localStorage
const pollResults = ref(
  JSON.parse(localStorage.getItem('pollResults'))?.length
    ? JSON.parse(localStorage.getItem('pollResults'))
    : []
)

// Clean localStorage TODO: remove or comment
function onCleanLocalStorage() {
  localStorage.removeItem('pollResults')
  pollResults.value = []
}

// TODO: remove or comment
if (pollResults.value?.length) {
  console.log('🍎 ', pollResults.value)
} else {
  console.log('🍎 No Poll Results')
}
</script>

<style lang="postcss" scoped></style>
