const express = require('express')
const router= express.Router();
const handleControllers = require('../controllers/controllers')
router.get('/',handleControllers.handleHome);
router.post('/add-user',handleControllers.submitHandler);
router.get('/users',handleControllers.listAllUsers)
module.exports=router