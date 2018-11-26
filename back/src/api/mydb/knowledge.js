const restful = require('node-restful')
const mongoose = restful.mongoose

const knowledgeSchema = new mongoose.Schema({
    description: { type: String, required: true }
})

module.exports = restful.model('conhecimentos', knowledgeSchema)