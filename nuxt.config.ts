import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: [
      '@/assets/scss/app.scss',
      '@fontsource/nunito/400.css',
      '@fontsource/nunito/600.css',
      '@fontsource/nunito/700.css',
  ],
  build: {
    postcss: {
      // add Postcss options
      postcssOptions: require('./postcss.config.js'),
    },
  },
  publicRuntimeConfig: {
    apiUrl: process.env.API_URL,
  }
})
