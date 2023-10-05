const express = require("express");
const app = express();
const http = require('http');
const server = http.createServer(app);
require('dotenv').config({path: './.env'})

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