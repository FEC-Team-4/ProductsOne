const {sequelize} = require('../models/index.js');
const {QueryTypes} = require('sequelize');

module.exports = {
  getProducts: async (req, res) => {
    const queryString = `SELECT * FROM public.product limit 5;`;
    const result = await sequelize.query(queryString, { type: QueryTypes.SELECT });
    res.send(result);
  },

  getProductInfo: async (req, res) => {
    //req.params
    const queryString = `SELECT * FROM public.product
    INNER JOIN public.features
    ON public.product.id = public.features.product_id
    WHERE public.product.id = 3;`;
    const result = await sequelize.query(queryString, { type: QueryTypes.SELECT });
    res.send(result);
  },

  getStyles: (req, res) => {
    res.send('styles route working')
    // QUERY NEEDS WORK
    // SELECT * FROM public.styles
    // INNER JOIN public.photos
    // ON public.styles.id = public.photos."styleId"
    // INNER JOIN public.skus
    // ON public.photos."styleId" = public.skus."styleId"
    // WHERE public.styles.productId = 3;
  },

  getRelated: (req, res) => {
    res.send('related route working')

    //QUERY
    // SELECT * FROM public.related
    // WHERE public.related.current_product_id = 3;
  }
};