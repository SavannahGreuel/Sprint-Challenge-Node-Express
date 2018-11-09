const express = require('express');
const router = express.Router();
const projectModel = require('../../data/helpers/projectModel');


//======PROJECT ENDPOINTS======

//GET all posts '/api/projects'
router.get('/', (req, res) => {
    projectModel.get()
    .then( projects => {
        res.status(200).json(projects);
    })
    .catch( error => {
        res.status(500).json({message: error})
    })
})

module.exports = router;