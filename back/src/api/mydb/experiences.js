const restful = require('node-restful')
const mongoose = restful.mongoose

const ExperiencesSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String }
})

module.exports = restful.model('experiences', ExperiencesSchema)