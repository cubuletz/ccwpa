<template>
  <div>
    <NuxtLayout name="main">
      <!-- H1 -->
      <template #headline>
        <div class="flex items-start space-x-10">
          <div class="space-y-3">
            <!-- HEADLINE H1 -->
            <h1 class="text-5xl font-bold text-neutral-800">
              Color Contrast in <br />
              Web Pages <br />
              and Aplications
            </h1>
            <!-- Subtitle -->
            <p class="text-xl text-neutral-600">
              Do irure quis commodo amet eu ullamco in nisi incididunt id amet
              elit ex sint.
            </p>

            <!-- Author -->
            <p class="text-base text-neutral-600">by Cristian Ciobanu, 2024</p>
          </div>

          <div class="w-1/2 space-y-1">
            <!-- Hero image -->
            <img src="/hero.jpeg" alt="" />
            <p class="text-sm text-right">Free image provided by ...</p>
          </div>
        </div>
      </template>

      <!-- MAIN -->
      <template #main>
        <div class="space-y-10">
          <!-- SECTION 1 -->
          <section class="space-y-5 bg-slate-300">Section 1</section>

          <!-- SECTION 2  -->
          <section class="space-y-5 bg-slate-300">Section 2</section>
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

<style lang="postcss" scoped></style>
