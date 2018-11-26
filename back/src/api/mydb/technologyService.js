const Technology = require('./technology')

Technology.methods(['get', 'post', 'put', 'delete'])
Technology.updateOptions({new: true, runValidators: true}) //atualiza update e verifica requisitos

module.exports = Technology