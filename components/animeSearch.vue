<template>
  <div class="mg-5">
      <label>Japanese Name</label>
      <input type="text" class="border-2 bg-slate-500 text-black" placeholder="Search Anime" v-model="Name">
      <button type="button" @click="searchAnime" class="btn">Search</button>
  </div>
  <div class="grid grid-cols-2 gap-5">
    <div v-for="a in Anime">
      <AnimeCard :Anime="a" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Name: null,
      Anime: []
    }
  },
  methods: {
    searchAnime() {
      const { data: Anime } = useFetch('/api/db/findAnime', {
        method: 'post',
        body: { Name: this.Name }
      })
      this.Anime = Anime
      }
    },
  mounted () {
    this.searchAnime()
  }
}
</script>

<style scoped>
  
</style>