const Biography = require('./biography')

Biography.methods(['get', 'post', 'put', 'delete'])
Biography.updateOptions({new: true, runValidators: true}) //atualiza update e verifica requisitos

module.exports = Biography