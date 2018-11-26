const Projects = require('./projects')

Projects.methods(['get', 'post', 'put', 'delete'])
Projects.updateOptions({new: true, runValidators: true}) //atualiza update e verifica requisitos

module.exports = Projects