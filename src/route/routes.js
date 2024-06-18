const express = require('express');
const router = express.Router()
const { createStudent } = require('../controller/studentControl');
const { createFeedback, getFeedback} = require('../controller/feedbackControl');

router.get('/', (req,res)=>{
    res.send('Router Method!');
});

router.post('/student', createStudent)
router.post('/feedback')

//feedback route
router.post('/feedback', createFeedback)
router.post('/feedback', getFeedback)

module.exports = router;