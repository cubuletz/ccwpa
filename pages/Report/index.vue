<template>
  <div>
    <NuxtLayout name="main">
      <!-- MAIN -->
      <template #headline>
        <div class="space-y-10">
          <!-- HEADLINE H1 -->
          <h1 class="text-4xl font-bold">Report</h1>
        </div>
      </template>

      <!-- MAIN -->
      <template #main>
        <div class="space-y-10">
          <!-- SECTION 1 -->
          <section class="space-y-5 bg-slate-300">Section 1</section>
        </div>
      </template>
    </NuxtLayout>
  </div>
</template>

<script>
export default {
  name: "PageReport",
}
</script>

<style lang="postcss" scoped></style>
