const express = require("express");
const { getBlogs } = require("../controllers/blog.controllers");
const route = express.Router();

route.get("/", getBlogs);

module.exports = route;
