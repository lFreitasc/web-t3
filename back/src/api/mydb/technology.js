const restful = require('node-restful')
const mongoose = restful.mongoose

const technologySchema = new mongoose.Schema({
    description: { type: String, required: true }
})

module.exports = restful.model('Tecnologias', technologySchema)