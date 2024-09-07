const dotenv = require("dotenv");
dotenv.config();
const {
  APP_PORT,
  MAX_JSON_SIZE,
  URL_ENCODE,
  REQUEST_TIME,
  REQUEST_NUMBER,
  WEB_CACHE,
  DATABASE,
} = process.env;

module.exports = {
  APP_PORT,
  MAX_JSON_SIZE,
  URL_ENCODE,
  REQUEST_TIME,
  REQUEST_NUMBER,
  WEB_CACHE,
  DATABASE,
};

