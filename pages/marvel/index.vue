<template>
  <div class="container mx-auto">
    <h1 class="text-3xl">Marvel</h1>
    <div class="flex flex-wrap items-stretch">
      <nuxt-link
        v-for="(people, index) in posts.data.results"
        :key="index"
        to="/"
        class="w-1/3"
      >
        <div class="max-w-sm overflow-hidden rounded shadow-lg">
          <img
            class="w-full"
            :src="`${people.thumbnail.path}.${people.thumbnail.extension}`"
            :alt="people.name"
          />
          <div class="px-6 py-4">
            <div class="mb-2 text-xl font-bold">{{ people.name }}</div>
            <p class="text-base text-gray-700">
              {{ people.description }}
            </p>
          </div>
        </div>
      </nuxt-link>
    </div>
    <t-pagination
      v-model="currentPage"
      class="mx-auto"
      :total-items="posts.data.total"
      :per-page="limit"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Marvel',
  async fetch({ store }) {
    await store.dispatch('marvel/getAll', { page: 1, limit: 6 })
  },
  data() {
    return {
      currentPage: 1,
      limit: 6
    }
  },
  computed: {
    ...mapGetters({
      posts: 'marvel/posts'
    })
  },
  watch: {
    currentPage(now, old) {
      this.handlerPage(now)
    }
  },
  methods: {
    async handlerPage(num) {
      await this.$store.dispatch('marvel/getAll', {
        page: num,
        limit: this.limit
      })
    }
  }
}
</script>
