const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

const server = express();

server.use(express.json()); // used to parse JSON bodies
server.use(helmet()); // helps to set HTTP headers for app protection
server.use(morgan("combined")); // logger standard apache combines log output
server.use(cors()); // handles cross-origin requests

// Check the server
server.get("/", (req, res) => {
  res.send("Let's see what you got...");
});

// The rest of the routes/endpoints
const { authRouter, usersRouter } = require("../api/index.js");

// Authorization/Authentication Route
server.use("/auth", authRouter);

// Everthing referring to users this is the route
server.use("/users", usersRouter);

module.exports = server;
