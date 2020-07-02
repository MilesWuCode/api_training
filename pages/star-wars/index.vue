<template>
  <div class="container mx-auto">
    <h1 class="text-3xl">Star Wars</h1>
    <div>
      <nuxt-link
        v-for="(people, index) in posts.results"
        :key="index"
        :to="`/star-wars/` + url2id(people.url)"
      >
        <t-card body-class="p-3">
          {{ url2id(people.url) }} {{ people.name }}
        </t-card>
      </nuxt-link>
    </div>
    <t-pagination
      v-model="currentPage"
      class="mx-auto"
      :total-items="posts.count"
      :per-page="10"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Starwars',
  async fetch({ store }) {
    await store.dispatch('starwars/getAll', { page: 1 })
  },
  data() {
    return {
      currentPage: 1
    }
  },
  computed: {
    ...mapGetters({
      posts: 'starwars/posts'
    })
  },
  watch: {
    currentPage(now, old) {
      this.handlerPage(now)
    }
  },
  methods: {
    async handlerPage(num) {
      await this.$store.dispatch('starwars/getAll', { page: num })
    },
    url2id: (value) => {
      try {
        const url = new URL(value)

        const arr = url.pathname.split('/')

        return arr[arr.length - 2]
      } catch (e) {
        return ''
      }
    }
  }
}
</script>
