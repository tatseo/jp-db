import Anime from './Schemas'

export default defineEventHandler(async (event) => {

  // handle post data
  const {data} = await readBody(event)

  try {
    const anime = await Anime.create({
      jpName: data.jpName,
      enName: data.enName,
      deName: data.deName,
      season: {
        seasonNumber: 1,
        episodes: data.S1Episodes,
        releaseDate: data.S1Release
      }
    })
    console.log(anime)
  } catch (e) {
    console.log(e.message)
  }

})