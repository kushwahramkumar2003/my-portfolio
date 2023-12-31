const express = require("express");
const { getAllProjects } = require("../controllers/project.controller");

const route = express.Router();
route.get("/allProjects", getAllProjects);

module.exports = route;
