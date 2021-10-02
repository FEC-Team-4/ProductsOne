const express = require('express');
const router = express.Router();
const db = require('../config/database.js');
const Styles = require('../models/Styles.js');
// const Sequelize = require('sequelize');

//get Styles list
router.get('/products/:product_id/styles', (req, res) =>
  res.send('styles route working')
  // Styles.findAll()
  //   .then(products => res.send(products))
  //   .catch(err => res.render('error', {error: err}))
);

module.exports = router;