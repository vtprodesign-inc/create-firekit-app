const express = require('express');
const cors = require('cors');
const functions = require("firebase-functions");
const validateFirebaseIdToken = require('./validateFirebaseIdToken');
const validateAdmin = require('./validateAdmin');

const app = express();

app.use(cors({ origin: true }));
app.use(validateFirebaseIdToken);
app.use(validateAdmin);

app.get("/", async (request, response) => {
  functions.logger.info("GET test", { structuredData: true })

  response.send({ result: "You're doing great, Admin" })
});

module.exports = app;