const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

const userRoutes = require("./routes/users.routes");

/**
 * App-level middlewares
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * Routes Mounting
 */
app.use("/api", userRoutes);
app.use("/", (req, res, next) => {
  res.json({
    status: "Running",
  });
});

/**
 * 404 Error Handler
 */
app.use("*", (req, res, next) => {
  res.status(404).json({
    message: `Cannot ${req.method} ${req.originalUrl}`,
  });
});

/**
 * ExpressJS Central API Error Handler
 */
app.use((err, req, res, next) => {
  console.log("APIError\n%o", err);
  if (err.httpStatus) {
    res.status(err.httpStatus).json({
      message: err.message,
    });
  } else {
    res.status(500).json({
      message: "Internal Server Error.",
    });
  }
});

/**
 * Server config
 */
app.listen(process.env.PORT, () => {
  console.log(`Server Listening on Port ${process.env.PORT}`);
});
