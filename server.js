const jsonServer = require("json-server");
var fs = require("fs");

const server = jsonServer.create();

const router = jsonServer.router("db.json");

const middlewares = jsonServer.defaults();

const port = process.env.PORT || 3000;

const GQL_PORT = process.env.GRAPHQL_PORT || 5000;

server.use(middlewares);
server.use(router);

server.listen(port);
