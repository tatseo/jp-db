const mongoose = require("mongoose")

const seasonSchema = new mongoose.Schema({
  Season1: {episodes: Number, dropped: Date, finished: Date, Airing: Boolean},
  Season2: {episodes: Number, dropped: Date, finished: Date, Airing: Boolean},
  Season3: {episodes: Number, dropped: Date, finished: Date, Airing: Boolean},
  Season4: {episodes: Number, dropped: Date, finished: Date, Airing: Boolean},
  Season5: {episodes: Number, dropped: Date, finished: Date, Airing: Boolean},
  Season6: {episodes: Number, dropped: Date, finished: Date, Airing: Boolean},
  Season7: {episodes: Number, dropped: Date, finished: Date, Airing: Boolean},
  Season8: {episodes: Number, dropped: Date, finished: Date, Airing: Boolean},
  Season9: {episodes: Number, dropped: Date, finished: Date, Airing: Boolean},
  Season10: {episodes: Number, dropped: Date, finished: Date, Airing: Boolean},
  Season11: {episodes: Number, dropped: Date, finished: Date, Airing: Boolean},
})

const animeSchema = new mongoose.Schema({
  jpName: {
    type: String,
    required: true
  },
  enName: String,
  deName: String,
  Seasons: seasonSchema,
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