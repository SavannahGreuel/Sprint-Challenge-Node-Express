const express = require('express');

//==== ADD middleware

const server = express();

//==== ADD middleware(server)

server.get('/', (req, res) => {
    res.status(200).json({api: 'running'})
})

module.exports = server;