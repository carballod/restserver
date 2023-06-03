require("dotenv").config();
const Server = require("./MODELS/server");

const server = new Server();

server.listen();

