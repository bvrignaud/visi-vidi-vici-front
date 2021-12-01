import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: ['@/assets/scss/app.scss'],
  build: {
    postcss: {
      // add Postcss options
      postcssOptions: require('./postcss.config.js'),
    },
  },
})
