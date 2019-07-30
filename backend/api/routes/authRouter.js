const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const secrets = require('./secrets.js');

const users = require('../database/dbModels/usersModel.js');

// Registration route/endpoint
router.post('/register', (req, res) => {
	let user = req.body; // Grabbing the username and password under the variable user

	const hash = bcrypt.hashSync(user.password, 14); // call bcrypt and generate the hash using hashsync and pass it the user password and the second arg is the number of rounds the library will use to hash the password ( 2 to the 14th)

	user.password = hash; // user.password now equals the hash we just created in the line above

	// now save the user to the database after the password is hashed

	const user = new user({ username, password });

	user.save(function(err) {
		if (err) {
			res.status(500).send('Error registering new user');
		} else {
			res.status(200).send('Welcome to AstroHippie!');
		}
	});
});

// TOKEN SERVICE
function generateToken(user) {
	const payload = {
		subject: user.id,
		username: user.username,
	};

	const options = {
		expiresIn: '1d',
	};

	return jwt.sign(payload, secrets.jwtSecret, options);
}

module.exports = router;
