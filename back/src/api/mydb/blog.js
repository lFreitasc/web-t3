const restful = require('node-restful')
const mongoose = restful.mongoose

const blogSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: { type: String },
    link: {type:String, required: true}
})

module.exports = restful.model('blog', blogSchema)