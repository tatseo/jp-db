//const mongoose = require("mongoose")
import animeSchema from './Schemas'


export default defineEventHandler(async (event) => {

  // handle post data
  const { Name } = await readBody(event)

  try {
    if (!Name) {
      const anime = await animeSchema
      .find({})
      console.log(anime)
      return anime
    } else {
      const anime = await animeSchema
      .find({ $or: [{jpName: { "$regex": Name, $gt: 1 }},
      {enName: { "$regex": Name, $gt: 1 }},
      {deName: { "$regex": Name, $gt: 1 }}
      ]})
      console.log(anime)
      return anime
    }
    
  } catch (error) {
    console.log(error.message)
  }

})