const restful = require('node-restful')
const mongoose = restful.mongoose

const biographySchema = new mongoose.Schema({
    description: { type: String, required: true }
})

module.exports = restful.model('Bio', biographySchema)