const sequelize = require('../config/database.js');

module.exports = {
  getProducts: (req, res) => {
    res.send('product list route working')
  },
  getProductInfo: (req, res) => {
    res.send('product info route working')
  },
  getStyles: (req, res) => {
    res.send('styles route working')
  },
  getRelated: (req, res) => {
    res.send('related route working')
  }
};