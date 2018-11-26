const restful = require('node-restful')
const mongoose = restful.mongoose

const aboutSchema = new mongoose.Schema({
    description: { type: String, required: true },
    semester: {type: String, required: true },
    local: {type: String, required: true}
})

module.exports = restful.model('About', aboutSchema)