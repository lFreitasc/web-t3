const restful = require('node-restful')
const mongoose = restful.mongoose

const describeSchema = new mongoose.Schema({
    description: { type: String, required: true }
})

module.exports = restful.model('caracteristicas', describeSchema)