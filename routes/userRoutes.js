const express = require('express');
const router = express.Router();

const {getUser, postuser} = require('../controllers/userControllers')

//get users 
router.get('/user', getUser)

//post user
router.post('/user', postuser)

module.exports = router
