const express = require('express');
const tasksController = require( './controllers/tasksController' );
const router = express.Router();


//rota GET , endpoint '/tasks' e vai executar um controller passando todas tasks 
router.get('/tasks', tasksController.getAll);


module.exports = router ;

