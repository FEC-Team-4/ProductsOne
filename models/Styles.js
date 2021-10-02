// const {Sequelize} = require('sequelize');
const db = require('../config/database');

const Styles = db.define('Styles', {

})

Styles.sync()
.then(() => {
  console.log('Styles table created');
});

module.exports = Styles;
