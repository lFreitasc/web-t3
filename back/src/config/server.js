const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const port = 3003

server.use(bodyParser.urlencoded({extended: true})) //midway, suporte para requisições

server.listen(port, function(){
    console.log(`backend is running on port ${port}.`)
})

module.exports = server