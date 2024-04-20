<template>
  <div>
    <!-- HEADER -->
    <header class="sticky top-0 z-10">
      <!-- TheHeader -->
      <TheHeader />
    </header>

    <!-- Wrapper H1, main -->
    <div class="px-5 pt-20 pb-40 space-y-10">
      <!-- HEADLINE H1 -->
      <div class="mx-auto" :class="'max-w-[736px] xl:max-w-[988px]'">
        <slot name="headline" />
      </div>

      <!-- MAIN -->
      <main class="mx-auto" :class="'max-w-[736px] xl:max-w-[988px]'">
        <!-- SLOT #main -->
        <slot name="main" />
      </main>
    </div>

    <!-- FOOTER -->
    <footer
      class="fixed bottom-0 flex items-center justify-center w-full h-16 p-5 space-x-1 text-base bg-white border-t border-neutral-300 text-neutral-600"
    >
      <img src="/logo.png" alt="" class="w-5 h-5" />
      <p>
        Colour Contrast in Web Pages and Aplications. Copyright © 2024 Cristian
        Ciobanu. University of Bolton.
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'LayoutMain',
}
</script>

<script setup></script>
