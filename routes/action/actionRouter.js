const express = require('express');
const router = express.Router();
const actionModel = require('../../data/helpers/actionModel');


//======ACTION ENDPOINTS======

//GET all actions '/api/actions'
router.get('/', (req, res) => {
    actionModel.get()
    .then( actions => {
        res.status(200).json(actions);
    })
    .catch( error => {
        res.status(500).json({message: error})
    })
})

//GET actions by :id  '/api/actions/:id'
router.get('/:id', (req, res) => {
    const { id } = req.params;

    actionModel.get(id)
    .then( action => {
        if (action) {
            res.status(200).json(action)
        } else {
            res.status(404).json({ message: 'action Not Found'})
        }
    })
    .catch(error => {
        res.status(500).json({ message: error})
    })
})

//POST (create) new action '/api/actions'
router.post('/', (req, res) => {
    actionModel.insert({
        project_id: req.body.project_id,
        description: req.body.description,
        notes: req.body.notes
    })
    .then(newaction => {
        res.status(201).json(newaction);
    })
    .catch(error => {
        res.status(500).json({ message: error})
    })
})


//UPDATE action '/api/actions/:id'
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const action = req.body;

    actionModel.update(id, action)
    .then(count => {
        if (count) {
            res.status(200).json({ message: 'action was updated'});
        } else {
            res.status(404).json({ message: 'action does not exist'})
        }
    })
    .catch(error => {
        res.status(500).json({ message: error})
    })
})

//DELETE action '/api/actions/:id'
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    actionModel.remove(id)
    .then(count => {
        if (count) {
            res.status(200).json({ message: `${count} action(s) deleted`})
        } else {
            res.status(404).json({ message: 'action does not exist'})
        }
    })
    .catch (error => {
        res.status(500).json ({ message: error})
    })
})

module.exports = router;