import animeSchema from './Schemas'

export default defineEventHandler(async (event) => {

  // handle post data
  const { id } = await readBody(event)

  try {
    const anime = await animeSchema.deleteOne({
      _id: id
    })
    console.log(id)
  } catch (error) {
    console.log(error.message)
  }
})