<template>
  <div class="container mx-auto">
    <h1 class="text-3xl">Pokemon</h1>
    <div class="flex flex-wrap items-stretch">
      <div
        v-for="pokemon in pokemons.slice(-6)"
        :key="pokemon.id"
        class="w-1/3"
      >
        <div class="max-w-sm overflow-hidden rounded shadow-lg">
          <img class="w-full" :src="pokemon.image" :alt="pokemon.name" />
          <div class="px-6 py-4">
            <div class="mb-2 text-xl font-bold">{{ pokemon.name }}</div>
          </div>
        </div>
      </div>
    </div>
    <t-pagination
      v-model="currentPage"
      class="mx-auto"
      :total-items="151"
      :per-page="6"
    />
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  name: 'Pokemon',
  apollo: {
    pokemons() {
      return {
        query: gql`
          query pokemons($first: Int!) {
            pokemons(first: $first) {
              id
              number
              name
              image
            }
          }
        `,
        variables() {
          return {
            first: this.first * this.currentPage
          }
        }
      }
    }
  },
  data() {
    return {
      pokemons: [],
      currentPage: 1,
      first: 6
    }
  }
}
</script>
