const mongoose = require('mongoose')
const animeSchema = require('./db/Schemas')

mongoose.set('strictQuery', false)

main().catch(err => console.log(err))

async function main() {
  await mongoose.connect(process.env.MONGO_DB_URI)}

async function addAnime() {
  try {
    const anime = await animeSchema.create({
      jpName: "Sword Art Online"
    })
    console.log(anime)
  } catch (e) {
    console.log(e.message)
  }
}
