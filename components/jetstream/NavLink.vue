<template>
  <NuxtLink :to="href">
    <slot />
  </NuxtLink>
</template>

<script>
    export default defineComponent({
        props: ['href'],
    })
</script>

<style scoped>
a {
  @apply no-underline inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition;
}

a.router-link-exact-active {
  @apply border-indigo-400 text-gray-900 focus:outline-none focus:border-indigo-700;
}
</style>
