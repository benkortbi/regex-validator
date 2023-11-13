const express = require("express");
const {
	renderService,
	checkInput,
} = require("../../controllers/services_controllers/servicesController");
const servicesRouter = express.Router();

servicesRouter.get("/:title", renderService);
servicesRouter.post("/isValid", checkInput);
module.exports = servicesRouter;
