const express = require('express');
const router = express.Router();
const { getTasks, createTask } = require('../controllers/taskController');
const authenticateToken = require('../midlleware.js');

router.get('/', authenticateToken, getTasks);
router.post('/', authenticateToken, createTask);

module.exports = router;
