const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const models = require('../models/index.js');

//database
const db = require('../config/database.js');

const app = express();

//bodyparser
app.use(express.urlencoded({extended: true}))

//products routes
const router = require('./routes.js');
app.use('/', router);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
  db.authenticate()
   .then(() => console.log('db connected...'))
   .catch(err => console.log('db err:', err))
})