require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { default: helmet } = require("helmet");
const compression = require("compression");
const initRoutes = require("./routes/index");

const app = express();

// Config CORS
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

// init middlewares
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());

// INIT CONNECTION DATABASE (mongoDB)
require("./database/mongoDB.lv2");

// INIT CONNECTION DATABASE (MySQL)
require("./database/mysql.connect");

// init router
initRoutes(app);

// HANDLING ERROR

app.use("/", (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Internal server error";
  const stack = err.stack;

  res.status(status).json({
    success: false,
    status: status,
    message: message,
    stack: stack,
  });
});

module.exports = app;
