const express = require("express");
const homeRouter = require("./routes/home");
const services = require("./routes/services");
const expressLayouts = require("express-ejs-layouts");
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
//routes
app.use("/", homeRouter);
app.use("/validator", services);
module.exports = app;
