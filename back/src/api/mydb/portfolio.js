const restful = require('node-restful')
const mongoose = restful.mongoose

const portfolioSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: {type: String, required: true }
})

module.exports = restful.model('Portfolio', portfolioSchema)