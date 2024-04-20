<template>
  <div>
    <NuxtLayout name="main">
      <!-- H1 -->
      <template #headline>
        <div class="flex items-start space-x-5">
          <div class="w-1/2 space-y-4">
            <!-- HEADLINE H1 -->
            <h1 class="text-5xl font-bold text-neutral-800">
              Colour Contrast <br />
              in Web Pages <br />
              and Aplications
            </h1>
            <!-- Subtitle -->
            <p class="text-xl text-neutral-600">
              Enhancing digital accessibility through innovative color contrast
              checking and real-user feedback, ensuring a clearer and more
              inclusive web experience for all.
            </p>
            <!-- Author -->
            <!-- <p class="text-base text-neutral-600">by Cristian Ciobanu, 2024</p> -->

            <div class="flex items-center pt-4 space-x-5">
              <AppButton
                label="Contrast Checker"
                @click="navigateTo('/contrast-checker/')"
              />
              <AppButton label="Survey" @click="navigateTo('/survey/')" />
            </div>
          </div>

          <div class="w-1/2 space-y-1">
            <!-- Hero image -->
            <img src="/hero.jpg" alt="" />
            <p class="text-sm text-right text-neutral-600">
              Free image from
              <a
                href="https://unsplash.com/photos/red-white-and-green-color-pencils-O2u6gA2esAI"
                target="blank"
                class="font-semibold a-link"
                >unsplash.com</a
              >
            </p>
          </div>
        </div>
      </template>

      <!-- MAIN -->
      <template #main>
        <div class="space-y-10">
          <!-- SECTION 1 -->
          <!-- <section class="flex items-center w-1/2 pr-5 space-x-5"></section> -->
        </div>
      </template>
    </NuxtLayout>
  </div>
</template>

<script>
export default {
  name: 'PageHome',
}
</script>

<script setup>
// Page title
const pageTitle = 'Home'

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
</script>

<style lang="postcss" scoped></style>
