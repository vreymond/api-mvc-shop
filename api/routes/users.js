const express = require('express');
const router = express.Router();

const UsersController = require('../controllers/users');
const checkAuth = require('../middleware/check-auth');

router.post('/signup', UsersController.users_signup);

router.post('/login', UsersController.users_login);

router.delete('/:userId', checkAuth, UsersController.users_delete);

module.exports = router;

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRhdGFAdGl0aS5jb20iLCJ1c2VySWQiOiI1ZDEzNjhkYTNlZTg1MGMzZjcwZDcwMzAiLCJpYXQiOjE1NjE1NTMxMjIsImV4cCI6MTU2MTU1NjcyMn0.K5tPt3YSAksTkDDTxW4blocyxp0Yq5J_14FWSpBwvIo