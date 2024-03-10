<template>
  <div>
    <!-- HEADER -->
    <header class="sticky top-0 z-10">
      <!-- TheHeader -->
      <TheHeader />
    </header>

    <!-- Wrapper H1, main -->
    <div class="px-5 py-20 space-y-10">
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
      class="fixed bottom-0 flex items-center justify-center w-full h-16 p-5 text-base border-t border-neutral-300 text-neutral-600"
    >
      <p>
        Color Contrast in Web Pages and Aplications. Copyright © 2024 Cristian
        Ciobanu.
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
