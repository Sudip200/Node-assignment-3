const express = require('express')
const router= express.Router();
const handleControllers = require('../controllers/controllers')

router.get('/',handleControllers.handleHome);

module.exports=router