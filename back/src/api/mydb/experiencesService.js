const Experiences = require('./experiences')

Experiences.methods(['get', 'post', 'put', 'delete'])
Experiences.updateOptions({new: true, runValidators: true}) //atualiza update e verifica requisitos

module.exports = Experiences