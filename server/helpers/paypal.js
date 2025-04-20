const paypal = require("paypal-rest-sdk");
require('dotenv').config();


paypal.configure({
  mode: "sandbox",
  client_id: process.env["Client_id "],
  client_secret: process.env["Client_Secret "],
});

const apiKey = process.env.API_KEY;
const dbHost = process.env.DB_HOST;
module.exports = paypal;
