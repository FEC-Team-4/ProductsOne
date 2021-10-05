const { Sequelize } = require('sequelize');

const dotenv = require('dotenv');
dotenv.config();

const sequelize = new Sequelize(process.env.DB, process.env.USER, process.env.PASSWORD, {
  host: process.env.HOST,
  dialect: 'postgres',
  define: {
    timestamps: false
  },
  logging: false,
  // pool: {
  //   max: 5,
  //   min: 0,
  //   acquire: 30000,
  //   idle: 10000
  // }
});
//k6 could bring up pool problem

const models = {};

models.Sequelize = Sequelize;
models.sequelize = sequelize;

models.features = require('./features')(sequelize, Sequelize);
models.photos = require('./photos')(sequelize, Sequelize);
models.product = require('./product')(sequelize, Sequelize);
models.related = require('./related')(sequelize, Sequelize);
models.skus = require('./skus')(sequelize, Sequelize);
models.styles = require('./styles')(sequelize, Sequelize);

models.styles.hasMany(models.product, {as: 'styles', foreignKey: 'id'});

models.product.belongsTo(models.styles, {
  foreignKey: 'id',
  as: 'productId'
});

models.features.hasMany(models.product, {as: 'features', foreignKey: 'id'});

models.product.belongsTo(models.features, {
  foreignKey: 'id',
  as: 'product_id'
});

models.related.hasMany(models.product, {as: 'related', foreignKey: 'id'});

models.product.belongsTo(models.related, {
  foreignKey: 'id',
  as: 'current_product_id'
});

models.skus.hasMany(models.styles, {as: 'skus', foreignKey: 'id'});

models.styles.belongsTo(models.skus, {
  foreignKey: 'id',
  as: 'styleId'
});

models.photos.hasMany(models.styles, {as: 'photos', foreignKey: 'id'});

models.styles.belongsTo(models.photos, {
  foreignKey: 'id',
  as: 'style_id'
});

module.exports = models;