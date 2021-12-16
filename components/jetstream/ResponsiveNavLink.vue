<template>
    <div>
        <button v-if="as === 'button'">
            <slot />
        </button>

        <NuxtLink :to="href" v-else>
            <slot />
        </NuxtLink>
    </div>
</template>

<script>
    export default defineComponent({
        props: ['href', 'as'],
    })
</script>

<style scoped>
  a, button {
    @apply block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition;
  }
  a {
    @apply no-underline;
  }
  button {
    @apply w-full text-left;
  }
  a.router-link-exact-active, button.router-link-exact-active {
    @apply border-indigo-400 text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700;
  }
</style>
