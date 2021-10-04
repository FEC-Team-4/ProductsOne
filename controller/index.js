const {sequelize} = require('../models/index.js');
const {QueryTypes} = require('sequelize');

module.exports = {
  getProducts: async (req, res) => {
    const queryString = `SELECT * FROM public.product limit 5;`;
    const result = await sequelize.query(queryString, { type: QueryTypes.SELECT });
    res.send(result);
  },

  getProductInfo: async (req, res) => {
    const inputId = req.params.product_id;
    const queryString = `SELECT * FROM public.product
    INNER JOIN public.features
    ON public.product.id = public.features.product_id
    WHERE public.product.id = ${inputId};`;
    const result = await sequelize.query(queryString, { type: QueryTypes.SELECT });
    res.send(result);
  },

  getStyles: async (req, res) => {
    const inputId = req.params.product_id;
    const queryString = `SELECT * FROM public.styles
    INNER JOIN public.photos
    ON public.styles.id = public.photos."styleId"
    INNER JOIN public.skus
    ON public.photos."styleId" = public.skus."styleId"
    WHERE public.styles.productId = ${inputId};`;
    const result = await sequelize.query(queryString, { type: QueryTypes.SELECT });
    res.send(result);
  },

  getRelated: async (req, res) => {
    const inputId = req.params.product_id;
    const queryString = `SELECT * FROM public.related
    WHERE public.related.current_product_id = ${inputId};`;
    const data = await sequelize.query(queryString, { type: QueryTypes.SELECT });
    const resultArr = [];
    data.forEach(item => resultArr.push(item.related_product_id))
    res.send(resultArr);
  }
};