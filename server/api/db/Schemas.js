const mongoose = require("mongoose")

const seasonSchema = new mongoose.Schema({
  seasonNumber: {
    type: Number,
    required: true
  },
  seasonName: String,
  episodes: Number,
  releaseDate: Date,
  finishedDate: Date
})
module.exports = mongoose.model("Seasons", seasonSchema)

const animeSchema = new mongoose.Schema({
  jpName: {
    type: String,
    required: true
  },
  enName: String,
  deName: String,
  seasons: {
    type: mongoose.ObjectId,
    ref: 'Seasons'
  },
  entryCreated: {
    type: Date,
    immutable: true,
    default: () => Date.now()
  },
  updatedAt: {
    type: Date,
    default: () => Date.now()
  }
})

module.exports = mongoose.model("Anime", animeSchema)