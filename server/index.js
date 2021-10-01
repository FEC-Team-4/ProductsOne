const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

//database
const db = require('../config/database');
// db.sequelize.sync();

//test db
// db.authenticate()
//   .then(() => console.log('db connected...'))
//   .catch(err => console.log('db err:', err))


const app = express();

//bodyparser
app.use(express.urlencoded({extended: false}))

//set static folder
// app.use(express.static(path.join(__dirname, 'public')))

//index route
app.get('/', (req, res) => res.status('index', {layout: 'landing'}).send(200));

//products routes
// app.use('/products', require('../routes/products'))

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})