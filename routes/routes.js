const express = require('express')
const router= express.Router();
const handleControllers = require('../controllers/controllers')
const middlerWares = require('../middlewares/middlewares')
// home route
router.get('/',handleControllers.handleHome);
// add user route
router.post('/add-user',middlerWares.validateUser,handleControllers.submitHandler);
// list all users
router.get('/users',handleControllers.listAllUsers)
// edit user
router.get('/edit/:id',handleControllers.vieweditUser)
// edit user
router.post('/edit/:id',middlerWares.validateUser,handleControllers.editUser)
// delete user
router.get('/delete/:id',handleControllers.deleteUser)
module.exports=router