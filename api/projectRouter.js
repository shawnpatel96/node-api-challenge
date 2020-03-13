const express = require('express');
const router = express.Router();


const projectsDb = require('../data/helpers/projectModel');

//get all

router.get('/', (req,res)=>{
    projectsDb.get()
    .then(projects=>{
        res.status(200).json(projects)
    })
    .catch(error=>{
        res.status(500).json({message: 'error getting all the projects'})
    })
})
// get by id
router.get('/:id', (req,res)=>{
    projectsDb.get(req.params.id)
    .then(project=>{
        res.status(200).json(project)
    })
    .catch(error=>{
        res.status(500).json({message: 'error project with given id'})
    })
})

//post new proj

router.post('/', (req,res)=>{
    projectsDb.insert(req.body)
    .then(project=>{
        res.status(200).json(project)
    })
    .catch(error=>{
        res.status(500).json({message: 'error posting project'})
    })
})

//update proj

router.put('/:id', (req,res)=>{
    projectsDb.update(req.params.id, req.body)
    .then(project=>{
        res.status(200).json(project)
    })
    .catch(error=>{
        res.status(500).json({message: 'error updateing project'})
    })
})

// delete proj

router.delete('/:id', (req,res)=>{
    projectsDb.remove(req.params.id)
    .then(project=>{
        res.status(200).json(project)
    })
    .catch(error=>{
        res.status(500).json({message: 'error deleting project'})
    })
})

module.exports=router
