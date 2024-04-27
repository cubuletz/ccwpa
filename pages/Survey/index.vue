<template>
  <div>
    <NuxtLayout name="main">
      <!-- MAIN -->
      <template #headline>
        <div class="flex items-start space-x-2">
          <!-- HEADLINE H1 -->
          <h1 class="text-4xl font-bold">{{ pageTitle }}</h1>

          <!-- Survey -->
          <div class="font-bold text-neutral-600">
            {{ surveyResults?.length }}
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

              <!-- Wrapper -->
              <div>
                <!-- Legend -->
                <div class="space-y-2 text-base my-9 text-neutral-600">
                  <p>How easy is to read the text in the boxes below?</p>

                  <div>
                    <p class="font-semibold">Response options:</p>
                    <ul class="list-disc list-inside">
                      <li>
                        <span class="font-semibold">Easy</span> - the text is
                        very clear and easy to read
                      </li>
                      <li>
                        <span class="font-semibold">Moderate</span> - the text
                        is readable, but it requires some effort
                      </li>
                      <li>
                        <span class="font-semibold">Difficult</span> - the text
                        is hard to read and strains the eyes
                      </li>
                    </ul>
                  </div>
                </div>

                <!-- *** 1st -->
                <div class="mb-10 space-y-2">
                  <div class="flex items-center">
                    <div
                      class="flex items-center justify-center w-full h-16 border border-neutral-300"
                      :style="{
                        backgroundColor: surveyColours.colourOne.background,
                      }"
                    >
                      <p
                        class="text-base"
                        :style="{
                          color: surveyColours.colourOne.foreground,
                        }"
                      >
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
                        v-model="colourOne"
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
                        v-model="colourOne"
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
                        v-model="colourOne"
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
                <div class="mb-10 space-y-2">
                  <div class="flex items-center">
                    <div
                      class="flex items-center justify-center w-full h-16 border border-neutral-300"
                      :style="{
                        backgroundColor: surveyColours.colourTwo.background,
                      }"
                    >
                      <p
                        class="text-base"
                        :style="{ color: surveyColours.colourTwo.foreground }"
                      >
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
                        v-model="colourTwo"
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
                        v-model="colourTwo"
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
                        v-model="colourTwo"
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
                <div class="pb-5 space-y-2">
                  <div class="flex items-center">
                    <div
                      class="flex items-center justify-center w-full h-16 border border-neutral-300"
                      :style="{
                        backgroundColor: surveyColours.colourThree.background,
                      }"
                    >
                      <p
                        class="text-base"
                        :style="{ color: surveyColours.colourThree.foreground }"
                      >
                        The quick brown fox jumps over the lazy dog.
                      </p>
                    </div>
                  </div>

                  <!-- Color Three -->
                  <fieldset
                    name="color_three"
                    class="flex items-center mx-auto space-x-5 w-max"
                  >
                    <!-- Easy -->
                    <div class="flex items-center space-x-1">
                      <input
                        v-model="colourThree"
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

                    <!-- Moderate -->
                    <div class="flex items-center space-x-1">
                      <input
                        v-model="colourThree"
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

                    <!-- Difficult -->
                    <div class="flex items-center space-x-1">
                      <input
                        v-model="colourThree"
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

              <!-- Alert feedback -->
              <div
                v-if="isFeedbackVisible"
                class="px-4 py-3 text-base text-white bg-green-700 border"
              >
                Successfully submitted. Thanks for your feedback.
              </div>
            </form>
          </section>
        </div>
      </template>
    </NuxtLayout>
  </div>
</template>

<script>
export default {
  name: 'PageSurvey',
}
</script>

<script setup>
// Assets
import surveyColours from '~/assets/surveyColours.json'

//

// Ocupations
import ocupations from '~/assets/occupations.json'

//

// Page title
const pageTitle = 'Survey'

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
const colourOne = ref(null)
const colourTwo = ref(null)
const colourThree = ref(null)

// Feddback message visibility state
const isFeedbackVisible = ref(false)

// Submit form
function onSubmitForm() {
  // Hide feedback message
  isFeedbackVisible.value = false

  // Save survey results
  surveyResults.value.push({
    firstName: firstName.value,
    age: age.value,
    ocupation: ocupation.value,
    visualCapability: visualCapability.value,
    //
    colourOne: colourOne.value,
    colourTwo: colourTwo.value,
    colourThree: colourThree.value,
  })
  // Save surveyResults on localStorage
  localStorage.setItem('surveyResults', JSON.stringify(surveyResults.value))

  // Reset form
  onCancelForm()

  // Show feedback message
  isFeedbackVisible.value = true
  // Hide feedback message
  setTimeout(() => {
    isFeedbackVisible.value = false
  }, 3000)
}

// Cancel form
function onCancelForm() {
  firstName.value = ''
  age.value = ''
  ocupation.value = ''
  visualCapability.value = ''
  //
  colourOne.value = null
  colourTwo.value = null
  colourThree.value = null

  // Hide feedback message
  isFeedbackVisible.value = false
}

//

// Get survey results from localStorage
const surveyResults = ref(
  JSON.parse(localStorage.getItem('surveyResults'))?.length
    ? JSON.parse(localStorage.getItem('surveyResults'))
    : []
)

// TODO: remove or comment
/* if (surveyResults.value?.length) {
  console.log('🍎 ', surveyResults.value)
} else {
  console.log('🍎 No survey Results')
} */
</script>

<style lang="postcss" scoped></style>
