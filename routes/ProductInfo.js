const express = require('express');
const router = express.Router();
const db = require('../config/database.js');
const ProductInfo = require('../models/ProductInfo.js');
// const Sequelize = require('sequelize');

//get ProductInfo list
router.get('/products/:product_id', (req, res) =>
  res.send('product info route working')
  // ProductInfo.findAll()
  //   .then(products => res.send(products))
  //   .catch(err => res.render('error', {error: err}))
);

module.exports = router;