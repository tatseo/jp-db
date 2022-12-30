<template>
    <div class="card text-center">
        <button class="btn" @click="deleteEntry(Anime._id)">
            <i class="material-icons">delete</i>
        </button>
        <img :src="Anime.image" alt="Anime thumb" class="thumb">
        <p class="font-bold text-grey-500 m-4 truncate">{{ Anime.jpName }}</p>
        <NuxtLink :to="`/anime/${Anime._id}`">
            <p class="btn my-4">View Details</p>
        </NuxtLink>
    </div>
</template>

<script setup>
const { Anime } = defineProps(['Anime'])
function deleteEntry(id) {
    useFetch('/api/db/deleteAnime', {
    method: 'post',
    body: { id: id},
    })
}
</script>

<style scoped>
    .thumb {
        max-height: 120px;
        max-width: 70%;
        margin: 0 auto;
    }
</style>