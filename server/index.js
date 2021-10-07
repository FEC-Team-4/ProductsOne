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
app.get('/loaderio-80496fefee50c399d582449ec961f05a/', (req, res) => {
  res.status(200).sendFiles(path.join(__dirname + "/token.txt"));
})

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)

})