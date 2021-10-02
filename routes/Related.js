const express = require('express');
const router = express.Router();
const db = require('../config/database.js');
const Related = require('../models/Related.js');
// const Sequelize = require('sequelize');

//get Related list
router.get('/products/:product_id/related', (req, res) =>
  res.send('related route working')
  // Related.findAll()
  //   .then(products => res.send(products))
  //   .catch(err => res.render('error', {error: err}))
);

module.exports = router;