const express = require("express");
const {
	renderHome,
} = require("../../controllers/home_controllers/homeController");
const homeRouter = express.Router();

homeRouter.get("/", renderHome);

module.exports = homeRouter;
