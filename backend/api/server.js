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

module.exports = server;
