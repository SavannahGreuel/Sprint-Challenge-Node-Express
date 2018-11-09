const express = require('express');
const projectRouter = require('../routes/project/projectRouter')

module.exports = server => {
    server.use(express.json());

    server.use('/api/projects', projectRouter)
}