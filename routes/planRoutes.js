const express = require('express');
const router = express.Router();

// const {getUser} = require('../controllers/userControllers')
const {getPlan, postPlan, getPlanbyiD, searchPlan} = require('../controllers/planControllers')

//get plan 
router.get('/plan', getPlan)

//get by id 
router.get('/plan/:id', getPlanbyiD)

//get by id 
router.get('/plan/search/:search', searchPlan)

//creat plan 
router.post('/plan', postPlan)

module.exports = router