const express = require('express');
const router = express.Router();
const db = require('../config/database.js');
const ProductList = require('../models/ProductList.js');
// const Sequelize = require('sequelize');

//get ProductList list
router.get('/products', (req, res) =>
  res.send('product list route working')
  // ProductList.findAll()
  //   .then(products => res.send(products))
  //   .catch(err => res.render('error', {error: err}))
);

module.exports = router;