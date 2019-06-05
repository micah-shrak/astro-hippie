import express from 'express';
import helmet from 'helmet';
import cors from 'cors';

const server = expres();

server.use(express.json());
server.use(helmet());
server.use(cors());

// Check the server
server.get('/', (req, res) => {
	res.send('Coffee time...');
});

module.exports = server;
