const { initializeApp } = require('firebase-admin/app');
initializeApp()

const functions = require("firebase-functions");
const test = require("./test")
const testAdmin = require("./testAdmin")

exports.test = functions.https.onRequest(test)
exports.testAdmin = functions.https.onRequest(testAdmin)
