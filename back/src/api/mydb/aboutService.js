const About = require('./about')

About.methods(['get', 'post', 'put', 'delete'])
About.updateOptions({new: true, runValidators: true}) //atualiza update e verifica requisitos

module.exports = About