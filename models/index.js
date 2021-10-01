const {Sequelize} = require('sequelize');

import {sequelize} from '../config/database.js';

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.product = require('./Product.js')(sequelize, Sequelize);