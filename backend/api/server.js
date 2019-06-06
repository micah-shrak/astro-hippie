const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

// Check the server
server.get('/', (req, res) => {
	res.send('Coffee time...');
});

// The rest of the routes/endpoints
const { authRouter, usersRouter } = require('../api/index.js');

// Authorization/Authentication Route
server.use('/auth', authRouter);

// Everthing referring to users this is the route
server.use('/users', usersRouter);

module.exports = server;
