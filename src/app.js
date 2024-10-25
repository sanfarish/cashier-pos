const express = require("express");
const app = express();
const cors = require("cors");
const logger = require("morgan");

const v1 = require("./routes/v1");

const notFound = require("./middlewares/notFoundHandler");
const errors = require("./middlewares/errorsHandler");

app.use(logger("dev"));
app.use(express.json());
app.use(cors());

app.get([ "/", "/v1" ], (req, res) => res.redirect(302, "/v1/docs"));
app.use("/v1", v1);

app.use(errors);
app.use("*", notFound);

module.exports = app;
