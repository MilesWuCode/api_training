<template>
  <div class="container mx-auto">
    <h1 class="text-3xl">Star Wars - {{ post.name }}</h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'StarwarsDetail',
  validate({ params }) {
    return /^\d+$/.test(params.id)
  },
  computed: {
    ...mapGetters({
      post: 'starwars/post'
    })
  },
  mounted() {
    this.fetch()
  },
  methods: {
    async fetch() {
      await this.$store.dispatch('starwars/getShow', {
        id: this.$route.params.id
      })
    }
  }
}
</script>
