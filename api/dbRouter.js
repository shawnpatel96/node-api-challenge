const express = require('express');
const router = express.Router();

const projectRouter= require('./projectRouter');
const actionsRouter = require('./actionsRouter');

router.use('/projects', projectRouter)
router.use('/actions', actionsRouter)

module.exports=router;