/*
 * Title: Task Management API
 * Description: Start Server for Task Management API Project
 * Author: Istiak Ahammad
 * Date: 7/9/2024
 *
 */

/**
 * node modules
 **/
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

/**
 * custom module
 **/
const {
  APP_PORT,
  MAX_JSON_SIZE,
  URL_ENCODE,
  REQUEST_TIME,
  REQUEST_NUMBER,
  WEB_CACHE,
  DATABASE,
} = require("./src/config");
const { connectDB } = require("./src/config/mongoose_config");
const router = require("./routes/api");

// express app object
const app = express();

// Application Middleware
app.use(express.json({ limit: MAX_JSON_SIZE }));
app.use(express.urlencoded({ extended: Boolean(URL_ENCODE) }));

// Therdparty Middleware
app.use(cors());
app.use(helmet());

// Setup Application Limiter
const limiter = rateLimit({
  windowMs: Number(REQUEST_TIME),
  max: Number(REQUEST_NUMBER),
}); // 20*60*1000
app.use(limiter);

// Setup Cache
app.set("etag", Boolean(WEB_CACHE));

// Application Routes
app.use("/api", router);

// Start server on port 4000
app.listen(APP_PORT, async () => {
  console.log(`Server start on: http://localhost:${APP_PORT}`);

  // database connection
  await connectDB(DATABASE);
});
