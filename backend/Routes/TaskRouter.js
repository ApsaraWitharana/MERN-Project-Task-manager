const {createTask} = require('../Controllers/TaskController');

const router = require('express').Router();

//to get all the tasks
router.get('/',(req,res)=> {
    res.send('All tasks')
})

// To create a task
router.post('/', createTask);

module.exports = router;