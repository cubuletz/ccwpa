<template>
  <div
    class="flex items-center justify-between w-full h-16 px-5 bg-white border-b border-neutral-300"
  >
    <div class="flex items-center space-x-40">
      <!-- HOME -->
      <NuxtLink to="/" class="flex items-center space-x-1 text-xl font-bold text-neutral-800">
        <img src="/logo.png" alt="" class="w-6 h-6" />
        <span>CCWPA</span>
      </NuxtLink>
      

      <div class="space-x-5">
       <!-- CONTRAST CHECKER -->
        <NuxtLink
          to="/contrast-checker/"
          class="p-2 text-base rounded-lg text-neutral-600 hover:text-neutral-900"
          :active-class="'nuxt-link-active'"
          exact
        >
          Contrast Checker
        </NuxtLink>

        <!-- POOL -->
        <NuxtLink
          to="/survey/"
          class="p-2 text-base rounded-lg text-neutral-600 hover:text-neutral-900"
          :active-class="'nuxt-link-active'"
          exact
        >
          Survey
        </NuxtLink>

        <!-- REPORT -->
        <NuxtLink
          to="/report/"
          class="p-2 text-base rounded-lg text-neutral-600 hover:text-neutral-900"
          :active-class="'nuxt-link-active'"
          exact
        >
          Report
        </NuxtLink>

        <!-- ABOUT -->
        <NuxtLink
          to="/about/"
          class="p-2 text-base rounded-lg text-neutral-600 hover:text-neutral-900"
          :active-class="'nuxt-link-active'"
          exact
        >
          About
        </NuxtLink>
      </div>
    </div>

    <!-- GITHUB -->
    <NuxtLink
      to="https://github.com/cubuletz/ccwpa"
      target="blank"
      external
      class="w-6"
      
    >
      <img alt="" src="/github.png"></img>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: "TheHeader",
}
</script>

<style lang="postcss" scoped>
.nuxt-link-active {
  @apply text-neutral-800 underline  underline-offset-[22px] decoration-4 decoration-neutral-800 font-semibold;
}
</style>
