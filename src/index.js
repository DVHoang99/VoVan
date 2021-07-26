const express = require("express");
const cors = require("cors");
const api = require("./api");
const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
const configurations = require("./configurations");
const useDatabase = require("./libs/database");
server.set("database", useDatabase(configurations.database));
// Middlewares
server.use(cors());
server.use(express.static("public"));
server.get("/api/get/score/:param", api.score.getAll);
server.post("/api/post/score", api.score.postItem);
server.get("/api/get/score/total/:param", api.score.getTotal);
server.get("/api/root", api.root.get);

module.exports = server;
