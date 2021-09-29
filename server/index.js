const express = require('express');
// const expresshand = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

//database
const db = require('../config/database');

//test db
db.authenticate()
  .then(() => console.log('db connected...'))
  .catch(err => console.log('db err:', err))

const app = express();

//handlebars
// app.engine('handlebars', expresshand({defaultLayout: 'main'}));
// app.set('view engine', 'handlebars');

//bodyparser
app.use(express.urlencoded({extended: false}))

//set static folder
app.use(express.static(path.join(__dirname, 'public')))

//index route
app.get('/', (req, res) => res.render('index', {layout: 'landing'}));

//products routes
app.use('/products', require('../routes/products'))

const PORT = process.env.PORT || 5431;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})