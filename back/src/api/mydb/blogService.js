const Blog = require('./biography')

Blog.methods(['get', 'post', 'put', 'delete'])
Blog.updateOptions({new: true, runValidators: true}) //atualiza update e verifica requisitos

module.exports = Blog