// const {Sequelize} = require('sequelize');
const db = require('../config/database');

const ProductInfo = db.define('ProductInfo', {

})

ProductInfo.sync()
.then(() => {
  console.log('ProductInfo table created');
});

module.exports = ProductInfo;
