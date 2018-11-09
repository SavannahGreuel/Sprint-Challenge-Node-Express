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

//GET by :id  '/api/projects/:id'
router.get('/:id', (req, res) => {
    const { id } = req.params;

    projectModel.get(id)
    .then( project => {
        if (project) {
            res.status(200).json(project)
        } else {
            res.status(404).json({ message: 'Project Not Found'})
        }
    })
    .catch(error => {
        res.status(500).json({ message: error})
    })
})

//POST (create) new project '/api/projects'
router.post('/', (req, res) => {
    projectModel.insert({
        name: req.body.name,
        description: req.body.description
    })
    .then(newProject => {
        res.status(201).json(newProject);
    })
    .catch(error => {
        res.status(500).json({ message: error})
    })
})

module.exports = router;