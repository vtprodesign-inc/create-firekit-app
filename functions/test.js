const express = require('express');
const cors = require('cors');
const functions = require("firebase-functions");
const validateFirebaseIdToken = require('./validateFirebaseIdToken');

const app = express();

app.use(cors({ origin: true }));
app.use(validateFirebaseIdToken);

app.get("/", async (request, response) => {
  functions.logger.info("GET test", { structuredData: true })

  response.send({ result: "You're doing great" })
});

module.exports = app;