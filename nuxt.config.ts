import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // SSR
  ssr: false,

  // DEVTOOLS
  devtools: { enabled: false },

  // DEV SERVER
  devServer: {
    // Localhost
    port: 8000, // default 3000
  },

  //

  // COMPONENTS
  // https://nuxt.com/docs/guide/directory-structure/components
  // Autoimports
  components: ['~/components'],

  // IMPORTS
  imports: {
    dirs: [
      // Autoimports (all modules within given directory)
      'composables/**',
      'utils/**',
    ],
  },

  // MODULES
  modules: ['@nuxtjs/tailwindcss'],
})
