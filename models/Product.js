const Sequelize = require('sequelize');
const db = require('../config/database');

const Product = db.define('product', {
//fill in
})

Product.sync().then(() => {
  console.log('product table created');
});

module.exports = Product;