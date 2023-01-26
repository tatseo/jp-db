import Anime from './Schemas'

export default defineEventHandler(async (event) => {

  // handle post data
  const { id } = await readBody(event)

  try {
    const del = await Anime.deleteOne({
      _id: id
    })
    console.log(del)
  } catch (error) {
    console.log(error.message)
  }
})