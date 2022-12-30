<template>
  <div class="mg-5">
      <label>Japanese Name</label>
      <input type="text" class="border-2 bg-slate-500 text-black" placeholder="Search Anime" v-model="jpName">
      <button type="button" @click="searchAnime">Search</button>
  </div>
  <div>
    <p>{{ Anime }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jpName: null,
      Anime: null
    }
  },
  methods: {
    searchAnime() {
      const { data: Anime } = useFetch('/api/db/findAnime', {
        method: 'post',
        body: { jpName: this.jpName},
      })
      this.Anime = Anime
      }
    }
}
</script>

<style scoped>
  
</style>