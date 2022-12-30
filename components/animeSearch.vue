<template>
  <div class="mg-5">
      <label>Japanese Name</label>
      <input type="text" class="border-2 bg-slate-500 text-black" placeholder="Search Anime" v-model="jpName">
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
      jpName: null,
      Anime: []
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