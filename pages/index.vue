<template>
  <NuxtLayout title="Spots">
    <template #header>
      <h2 class="font-semibold text-xl text-gray-800 leading-tight">Visi vidi vici</h2>
    </template>

    <div class="py-12">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg p-2 pt-0">
          <h3>Spots</h3>
          <table v-if="spots">
            <thead>
            <tr>
              <th>Nom</th>
              <th class="hidden sm:table-cell">Longitude</th>
              <th class="hidden sm:table-cell">Latitude</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="spot in spots">
              <td>
<!--                <NuxtLink :to="`${route('spots.show', spot)}`">{{ spot.name }}</NuxtLink>-->
<!--                <NuxtLink :to="{ path: 'spots', params: {id: spot.id} }">{{ spot.name }}</NuxtLink>-->
                <NuxtLink :to="`/spots/${spot.id}`">{{ spot.name }}</NuxtLink>
              </td>
              <td class="hidden sm:table-cell">
                {{ spot.lng }}
              </td>
              <td class="hidden sm:table-cell">
                {{ spot.lat }}
              </td>
            </tr>
            </tbody>
          </table>
          <div v-else class="flex items-center justify-center">
            <Spinner />
          </div>
<!--          <NuxtLink v-if="$page.props.user" :to="route('spots.create')">-->
<!--            <Button>Ajouter un nouveau Spot</Button>-->
<!--          </NuxtLink>-->
        </div>

<!--        <div v-if="spots.length" class="bg-white overflow-hidden shadow-xl sm:rounded-lg p-2 mt-5">-->
<!--          <Map :markers="markers()" :link-on-marker="true" />-->
<!--        </div>-->

      </div>
    </div>
  </NuxtLayout>
</template>


<script lang="ts">
import {fetch} from "~/composables/api";
import {useAsyncData} from "#app";
export default {
  layout: false,
};
</script>

<script setup lang="ts">
import {fetch} from "~/composables/api";
import {useLazyAsyncData} from "#app";
import Spinner from "~/components/Spinner.vue";

const { data: spots } = useLazyAsyncData(
    '/spots',
    () => fetch('/spots')
)

// function markers() {
//   return this.spots.map(spot => {
//     return {
//       id: spot.id,
//       coordinates: [spot.lat, spot.lng],
//       options: {title: spot.name},
//     };
//   });
// }
</script>
