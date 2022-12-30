//const mongoose = require("mongoose")
import animeSchema from './Schemas'


export default defineEventHandler(async (event) => {

  // handle query params
  const { data } = getQuery(event)

  // handle post data
  const { jpName } = await readBody(event)

  try {
    const anime = await animeSchema.find({
      jpName: { "$regex": jpName }
    })
    console.log(anime)
    return anime
  } catch (error) {
    console.log(error.message)
  }

})