const express = require('express');
const router = express.Router();

const actionsDb=require('../data/helpers/actionModel');
const projectsDb = require('../data/helpers/projectModel');

//get all
router.get('/', (req,res)=>{
    actionsDb.get()
    .then(actions=>{
        res.status(200).json(actions)
    })
    .catch(error=>{
        res.status(500).json({message: 'could not get all the actions'})
    })
})

// get by id

router.get('/:id', (req,res)=>{
    actionsDb.get(req.params.id)
    .then(action=>{
        res.status(200).json(action)
    })
    .catch(error=>{
        res.status(500).json({message: 'could not get action with given id'})
    })
})

//delete by id

router.delete('/:id', (req,res)=>{
    actionsDb.remove(req.params.id)
    .then(action=>{
        res.status(200).json(action)
    })
    .catch(error=>{
        res.status(500).json({message: 'could not get action with given id'})
    })
   
})

//get actions for given project

router.get('/action/:id', (req,res)=>{
    projectsDb.getProjectActions(req.params.id)
    .then(action=>{
        res.status(200).json(action)
    })
    .catch(error=>{
        res.status(500).json({message: 'could not get project actions with given id'})
    })
})

// post action to given project
router.post('/:id', (req,res)=>{
    req.body.project_id = req.params.id
    actionsDb.insert(req.body)
    .then(action=>{
        res.status(200).json({action})
    })
    .catch(error=>{
        res.status(500).json({message: 'could not add action to given project id'})
    })
})

//edit action

router.put('/action/:id', (req, res)=>{
   actionsDb.update(req.params.id , req.body)
   .then(project=>{
        res.status(200).json(project)
   })
   .catch(error=>{
        res.status(500).json({message: 'could not add action to given project'})
    }) 
})








module.exports= router;