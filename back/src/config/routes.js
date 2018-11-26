const express = require('express')

module.exports = function(server) {

    // Rotas API
    const router = express.Router()
    server.use('/api', router)

    // Rotas Aplicação
    const biographyService = require('../api/mydb/biographyService')
    biographyService.register(router, '/bio')

    const blogService = require('../api/mydb/blogService')
    blogService.register(router, '/blog')

    const describeService = require('../api/mydb/describeService')
    describeService.register(router, '/caracteristicas')

    const knowledgeService = require('../api/mydb/knowledgeService')
    knowledgeService.register(router, 'conhecimentos')

    const experiences = require('../api/mydb/experiencesService')
    experiences.register(router, '/experiencias')

    const portfolioService = require('../api/mydb/portfolioService')
    portfolioService.register(router, '/portfolio')

    const projectsService = require('../api/mydb/projectsService')
    projectsService.register(router, '/projetos')

    const aboutService = require('../api/mydb/aboutService')
    aboutService.register(router, '/sobre')

    const technologyService = require('../api/mydb/technologyService')
    technologyService.register(router, '/tecnologias')


}