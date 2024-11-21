const express = require('express');
const { getTasks, createTask, updateTask } = require('../controllers/taskController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', protect, getTasks);
router.post('/', protect, createTask);
router.patch('/:id', protect, updateTask);

module.exports = router;
