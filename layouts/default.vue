<template>
  <div>
    <Html>
      <Head>
        <Title>{{ title }} 🐟 Visi vidi vici</Title>
      </Head>
    </Html>

<!--    <jet-banner />-->
    <JetstreamBanner />

    <div class="min-h-screen bg-gray-100">
      <nav class="bg-white border-b border-gray-100">
        <!-- Primary Navigation Menu -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between h-16">
            <div class="flex">
              <!-- Logo -->
              <div class="flex-shrink-0 flex items-center">
                <NuxtLink to="/">
                    <JetstreamApplicationMark class="block h-9 w-auto" />
                </NuxtLink>
              </div>

              <!-- Navigation Links -->
              <div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                <JetstreamNavLink v-for="navLink in navLinks" :to="navLink.route">
                  {{ navLink.label }}
                </JetstreamNavLink>
<!--                <template v-if="! $page.props.user">-->
<!--                  <jet-nav-link :href="route('login')" :active="route().current('login')">-->
<!--                    Connexion-->
<!--                  </jet-nav-link>-->
<!--                <JetstreamNavLink :to="route('login')" :active="route().current('login')">-->
<!--                  Connexion-->
<!--                </JetstreamNavLink>-->
<!--                  <jet-nav-link :href="route('register')" :active="route().current('register')">-->
<!--                    Inscription-->
<!--                  </jet-nav-link>-->
<!--                </template>-->
              </div>
            </div>

            <div class="hidden sm:flex sm:items-center sm:ml-6">
              <!-- Settings Dropdown -->
<!--              <div class="ml-3 relative" v-if="$page.props.user">-->
<!--&lt;!&ndash;                <jet-dropdown align="right" width="48">&ndash;&gt;-->
<!--&lt;!&ndash;                  <template #trigger>&ndash;&gt;-->
<!--&lt;!&ndash;                    <button v-if="$page.props.jetstream.managesProfilePhotos" class="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition">&ndash;&gt;-->
<!--&lt;!&ndash;                      <img class="h-8 w-8 rounded-full object-cover" :src="$page.props.user.profile_photo_url" :alt="$page.props.user.name" />&ndash;&gt;-->
<!--&lt;!&ndash;                    </button>&ndash;&gt;-->

<!--&lt;!&ndash;                    <span v-else class="inline-flex rounded-md">&ndash;&gt;-->
<!--&lt;!&ndash;                                            <button type="button" class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition">&ndash;&gt;-->
<!--&lt;!&ndash;                                                {{ $page.props.user.name }}&ndash;&gt;-->

<!--&lt;!&ndash;                                                <svg class="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">&ndash;&gt;-->
<!--&lt;!&ndash;                                                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />&ndash;&gt;-->
<!--&lt;!&ndash;                                                </svg>&ndash;&gt;-->
<!--&lt;!&ndash;                                            </button>&ndash;&gt;-->
<!--&lt;!&ndash;                                        </span>&ndash;&gt;-->
<!--&lt;!&ndash;                  </template>&ndash;&gt;-->

<!--&lt;!&ndash;                  <template #content>&ndash;&gt;-->
<!--&lt;!&ndash;                    &lt;!&ndash; Account Management &ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;                    <div class="block px-4 py-2 text-xs text-gray-400">&ndash;&gt;-->
<!--&lt;!&ndash;                      Gérer le compte&ndash;&gt;-->
<!--&lt;!&ndash;                    </div>&ndash;&gt;-->

<!--&lt;!&ndash;                    <jet-dropdown-link :href="route('profile.show')">&ndash;&gt;-->
<!--&lt;!&ndash;                      Profil&ndash;&gt;-->
<!--&lt;!&ndash;                    </jet-dropdown-link>&ndash;&gt;-->

<!--&lt;!&ndash;                    <jet-dropdown-link :href="route('api-tokens.index')" v-if="$page.props.jetstream.hasApiFeatures">&ndash;&gt;-->
<!--&lt;!&ndash;                      API Tokens&ndash;&gt;-->
<!--&lt;!&ndash;                    </jet-dropdown-link>&ndash;&gt;-->

<!--&lt;!&ndash;                    <div class="border-t border-gray-100"></div>&ndash;&gt;-->

<!--&lt;!&ndash;                    &lt;!&ndash; Authentication &ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;                    <form @submit.prevent="logout">&ndash;&gt;-->
<!--&lt;!&ndash;                      <jet-dropdown-link as="button">&ndash;&gt;-->
<!--&lt;!&ndash;                        Déconnexion&ndash;&gt;-->
<!--&lt;!&ndash;                      </jet-dropdown-link>&ndash;&gt;-->
<!--&lt;!&ndash;                    </form>&ndash;&gt;-->
<!--&lt;!&ndash;                  </template>&ndash;&gt;-->
<!--&lt;!&ndash;                </jet-dropdown>&ndash;&gt;-->
<!--              </div>-->
            </div>

            <!-- Hamburger -->
            <div class="-mr-2 flex items-center sm:hidden">
              <button @click="showingNavigationDropdown = ! showingNavigationDropdown" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition">
                <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path :class="{'hidden': showingNavigationDropdown, 'inline-flex': ! showingNavigationDropdown }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                  <path :class="{'hidden': ! showingNavigationDropdown, 'inline-flex': showingNavigationDropdown }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Responsive Navigation Menu -->
        <div :class="{'block': showingNavigationDropdown, 'hidden': ! showingNavigationDropdown}" class="sm:hidden">
          <div class="pt-2 pb-3 space-y-1">
            <JetstreamResponsiveNavLink v-for="navLink in navLinks" :href="navLink.route">
              {{ navLink.label }}
            </JetstreamResponsiveNavLink>
<!--            <template v-if="! $page.props.user">-->
<!--&lt;!&ndash;              <jet-responsive-nav-link :href="route('login')" :active="route().current('login')">&ndash;&gt;-->
<!--&lt;!&ndash;                Connexion&ndash;&gt;-->
<!--&lt;!&ndash;              </jet-responsive-nav-link>&ndash;&gt;-->
<!--&lt;!&ndash;              <jet-responsive-nav-link :href="route('register')" :active="route().current('register')">&ndash;&gt;-->
<!--&lt;!&ndash;                Inscription&ndash;&gt;-->
<!--&lt;!&ndash;              </jet-responsive-nav-link>&ndash;&gt;-->
<!--            </template>-->
          </div>

          <!-- Responsive Settings Options -->
<!--          <div v-if="$page.props.user" class="pt-4 pb-1 border-t border-gray-200">-->
<!--            <div class="flex items-center px-4">-->
<!--              <div v-if="$page.props.jetstream.managesProfilePhotos" class="flex-shrink-0 mr-3" >-->
<!--                <img class="h-10 w-10 rounded-full object-cover" :src="$page.props.user.profile_photo_url" :alt="$page.props.user.name" />-->
<!--              </div>-->

<!--              <div>-->
<!--                <div class="font-medium text-base text-gray-800">{{ $page.props.user.name }}</div>-->
<!--                <div class="font-medium text-sm text-gray-500">{{ $page.props.user.email }}</div>-->
<!--              </div>-->
<!--            </div>-->

<!--            <div v-if="$page.props.user" class="mt-3 space-y-1">-->
<!--&lt;!&ndash;              <jet-responsive-nav-link :href="route('profile.show')" :active="route().current('profile.show')">&ndash;&gt;-->
<!--&lt;!&ndash;                Profil&ndash;&gt;-->
<!--&lt;!&ndash;              </jet-responsive-nav-link>&ndash;&gt;-->

<!--&lt;!&ndash;              <jet-responsive-nav-link :href="route('api-tokens.index')" :active="route().current('api-tokens.index')" v-if="$page.props.jetstream.hasApiFeatures">&ndash;&gt;-->
<!--&lt;!&ndash;                API Tokens&ndash;&gt;-->
<!--&lt;!&ndash;              </jet-responsive-nav-link>&ndash;&gt;-->

<!--              &lt;!&ndash; Authentication &ndash;&gt;-->
<!--              <form method="POST" @submit.prevent="logout">-->
<!--&lt;!&ndash;                <jet-responsive-nav-link as="button">&ndash;&gt;-->
<!--&lt;!&ndash;                  Déconnexion&ndash;&gt;-->
<!--&lt;!&ndash;                </jet-responsive-nav-link>&ndash;&gt;-->
<!--              </form>-->

<!--            </div>-->
<!--          </div>-->
        </div>
      </nav>

      <!-- Page Heading -->
      <header class="bg-white shadow" v-if="$slots.header">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <slot name="header"></slot>
        </div>
      </header>

      <!-- Page Content -->
      <main>
        <slot />
      </main>

      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from "./partials/Footer";

export default {
  components: {
    Footer,
  },
  props: {
    title: String,
  },
  data() {
    return {
      showingNavigationDropdown: false,
      navLinks: [
        {
          label: 'Accueil',
          route: '/',
        },
        {
          label: 'Contact',
          route: '/contact',
        },
      ],
    }
  },
  methods: {
    logout() {
      // this.$inertia.post(route('logout'));
    },
  }
}
</script>
