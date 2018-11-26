const Knowledge = require('./knowledge')

Knowledge.methods(['get', 'post', 'put', 'delete'])
Knowledge.updateOptions({new: true, runValidators: true}) //atualiza update e verifica requisitos

module.exports = Knowledge