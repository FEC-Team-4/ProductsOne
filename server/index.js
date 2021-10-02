const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

//database
const db = require('../config/database.js');

const app = express();

//bodyparser
app.use(express.urlencoded({extended: true}))

//products routes
app.use('/', require('../routes/ProductInfo.js'));
app.use('/', require('../routes/ProductList.js'));
app.use('/', require('../routes/Related.js'));
app.use('/', require('../routes/Styles.js'));

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
  db.authenticate()
   .then(() => console.log('db connected...'))
   .catch(err => console.log('db err:', err))
})