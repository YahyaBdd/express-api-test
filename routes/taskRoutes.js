const express = require('express');
const router = express.Router();
const { getTasks } = require('../controllers/taskController');
const authenticateToken = require('../midlleware.js');

router.get('/', authenticateToken, getTasks);

module.exports = router;
