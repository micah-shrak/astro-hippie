const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const secrets = require('./secrets.js');

const users = require('../database/dbModels/usersModel.js');

// Registration route/endpoint
router.post('/register', (req, res) => {
	let user = re;
	users.add(user);
});
