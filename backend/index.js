require('dotenv').config(); // load .env variable settings into Node

const server = require('./api/server.js');

const port = process.env.PORT || 8080;
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));
