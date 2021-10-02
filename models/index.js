const {Sequelize} = require('sequelize');

const {sequelize} = require('../config/database.js');



const models = {};
models.features = require('./features');
models.photos = require('./photos');
models.product = require('./product');
models.related = require('./related');
models.skus = require('./skus');
models.styles = require('./styles');

Object.keys(models).forEach((modelName) => {
  if('associate' in models[modelName]) {
    models[modelName].associate(models)
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;

//add in foreign keys?