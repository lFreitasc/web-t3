const Describe = require('./describe')

Describe.methods(['get', 'post', 'put', 'delete'])
Describe.updateOptions({new: true, runValidators: true}) //atualiza update e verifica requisitos

module.exports = Describe