const express = require('express')
const router= express.Router();
const handleControllers = require('../controllers/controllers')
const middlerWares = require('../middlewares/middlewares')
router.get('/',handleControllers.handleHome);
router.post('/add-user',middlerWares.validateUser,handleControllers.submitHandler);
router.get('/users',handleControllers.listAllUsers)
router.get('/edit/:id',handleControllers.editUser)
module.exports=router