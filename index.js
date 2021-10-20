'use strict';
require('dotenv').config();
// Start the web server
const server = require('./src/server');

// Start up DB Server
const { db } = require('./src/auth/models/index.js');
db.sync()
  .then(() => {
    server.start(process.env.PORT);
  })
  .catch(e => console.log(e.message));