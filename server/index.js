const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const {sequelize} = require('../models/index.js');
const compression = require('compression');

//database
const db = require('../models/index.js');

const app = express();

//bodyparser
app.use(express.urlencoded({extended: true}))

app.use(compression());
app.use(express.json());

//products routes
const router = require('./routes.js');
app.use('/', router);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
  sequelize.authenticate()
   .then(() => console.log('db connected...'))
   .catch(err => console.log('db err:', err))
})