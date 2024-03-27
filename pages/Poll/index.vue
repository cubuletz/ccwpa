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
          <section class="w-1/2 space-y-5">
            <!-- Form -->
            <form class="space-y-5" @submit.prevent="onSubmitForm">
              <!-- *** 1st -->
              <div
                class="px-5 pt-5 pb-4 space-y-4 border rounded-2xl border-neutral-300"
              >
                <div class="flex items-center">
                  <div
                    class="w-full h-16 flex items-center justify-center bg-[#FFFFFF] border border-neutral-200"
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
                      Poor
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
                      Good
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
                      Very Good
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
                    class="w-full h-16 flex items-center justify-center bg-[#FFFFFF] border border-neutral-200"
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
                      Poor
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
                      Good
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
                      Very Good
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
                    class="w-full h-16 flex items-center justify-center bg-[#FFFFFF] border border-neutral-200"
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
                      Poor
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
                      Good
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
                      Very Good
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
const name = ref('')
//
const colorOne = ref(null)
const colorTwo = ref(null)
const colorThree = ref(null)

// Submit form
function onSubmitForm() {
  alert('SUBMITED')

  // Reset form
  onCancelForm()
}

// Cancel form
function onCancelForm() {
  colorOne.value = null
  colorTwo.value = null
  colorThree.value = null
}
</script>

<style lang="postcss" scoped></style>
