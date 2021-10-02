const {db} = require('../config/database.js');

module.exports = {
  getProducts: (req, res) => {
    res.send('product list route working')
    // let { page, count } = req.body;
    // if (!page) {page = 2}
    // if (!count) {count = 3}
    // const queryString = `SELECT id, name, slogan, category, description, default_price
    //   FROM products LIMIT $1 OFFSET $2;`;

    // db.any(queryString, [count, (count * (page - 1))])
    //   .then((data) => {
    //     res.send(data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
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