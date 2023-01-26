<template>
  <div>
    <h1>Add Anime</h1>
  </div>
  <div>
    <form>
      <label>Japanese Name</label>
      <input type="text" class="border-2 border-black" v-model="jpName"><br>
      <label>English Name</label>
      <input type="text" class="border-2 border-black" v-model="enName"><br>
      <label>German Name</label>
      <input type="text" class="border-2 border-black" v-model="deName"><br>
      <label>Season 1</label><br>
      <label>Episodes</label>
      <input type="number" class="border-2 border-black" v-model="S1Episodes"><br>
      <label>Release Date</label>
      <input type="date" class="border-2 border-black" v-model="S1Release"><br>
      <label>Image</label>
      <UploadImage />
      <button class="btn" @click="addAnime">Confirm</button>
    </form>
  </div>
</template>

<script>
import uploadImage from '~~/components/uploadImage.vue';
export default {
  data() {
    return {
      jpName: null,
      enName: null,
      deName: null,
      S1Episodes: null,
      S1Release: null
    }
  },
  methods: {
    addAnime() {
      useFetch('/api/db/addAnime', {
        method: 'post',
        body: {
          jpName: this.jpName,
          enName: this.enName,
          deName: this.deName,
          S1Episodes: this.S1Episodes,
          S1Release: this.S1Release
        }
      })
      }
    },
  components: {
    uploadImage
  }
}
</script>

<style scoped>

</style>