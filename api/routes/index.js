const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const errorController = require('../controllers/error');

router.post('/login', userController.login);
router.post('/register', userController.register);
router.get('/unauthorized', errorController.error404);
router.route('*').all(errorController.error404);

module.exports = router;
