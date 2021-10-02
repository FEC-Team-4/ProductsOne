const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

//database
const db = require('../config/database.js');
// db.sequelize.sync();

const app = express();

//bodyparser
app.use(express.urlencoded({extended: false}))

//set static folder
// app.use(express.static(path.join(__dirname, 'public')))

//index route
// app.get('/', (req, res) => res.send(200));

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