const express = require("express");
const homeRouter = require("./routes/home");
const services = require("./routes/services");
const expressLayouts = require("express-ejs-layouts");
const cors = require("cors");
const path = require("path");
const app = express();
//set engine
app.set("view engine", "ejs");
app.set("layout", "./layouts/rootLayout");
app.set("views", path.join(__dirname, "views"));
//middlewares
app.use(expressLayouts);
app.use(express.static("public"));
app.use(express.json());
const corsOptions = {
	origin: "https://regex-validator.onrender.com",
	optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(corsOptions);
//routes
app.use("/", homeRouter);
app.use("/validator", services);
module.exports = app;
