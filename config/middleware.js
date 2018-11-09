const express = require('express');
const projectRouter = require('../routes/project/projectRouter')
const actionRouter = require('../routes/action/actionRouter')

module.exports = server => {
    server.use(express.json());

    server.use('/api/projects', projectRouter)
    server.use('/api/actions', actionRouter)
} 