const express = require('express');
const router = express.Router()
const { createStudent,login } = require('../controller/studentControl');
const { createFeedback, getFeedback} = require('../controller/feedbackControl');
const {authorization} = require("../middleware/middleware")

router.get('/', (req,res)=>{
    res.send('Router Method!');
});

//student route
router.post('/student', createStudent)
router.post('/login' , login)

//feedback route
router.post('/feedback', authorization , createFeedback)
router.post('/feedback', getFeedback)

module.exports = router;
