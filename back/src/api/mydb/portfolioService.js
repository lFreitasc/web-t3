const Portfolio = require('./portfolio')

Portfolio.methods(['get', 'post', 'put', 'delete'])
Portfolio.updateOptions({new: true, runValidators: true}) //atualiza update e verifica requisitos

module.exports = Portfolio