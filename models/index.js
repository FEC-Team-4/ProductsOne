const {Sequelize} = require('sequelize');

import {sequelize} from '../config/database.js';

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.productInfo = require('./ProductInfo.js')(sequelize, Sequelize);
db.productList = require('./ProductList.js')(sequelize, Sequelize);
db.related = require('./Related.js')(sequelize, Sequelize);
db.styles = require('./Styles.js')(sequelize, Sequelize);


//add in foreign keys