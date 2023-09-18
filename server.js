const express = require("express");
const app = express();
const http = require('http');
const server = http.createServer(app);
const admin = require('firebase-admin');
require('dotenv').config({path: './.env'})

// Initialize the app with a service account, granting admin privileges

admin.initializeApp({
    credential: admin.credential.cert({
        "projectId": process.env.FIREBASE_PROJECT_ID,
        "private_key": process.env.FIREBASE_PRIVATE_KEY,
        "client_email": process.env.FIREBASE_CLIENT_EMAIL,
    }),
    databaseURL: process.env.FIREBASE_DB_URL
});

// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
const start = async () => {
  try {
      const PORT = process.env.PORT || 8080;
      server.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}.`);
      });
  } catch (error) {
      console.log(error);
  }
};

require('./app/routes/firebase')(app);
start();