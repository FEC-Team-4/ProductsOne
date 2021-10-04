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
    const queryString = `SELECT *, (SELECT json_agg(json_build_object(
        'feature', feature,
        'value', value
      ))
      AS features
      FROM features
        WHERE product_id = p.id
          GROUP BY product_id
    ) FROM product AS p WHERE id = ${inputId};`;
    const result = await sequelize.query(queryString, { type: QueryTypes.SELECT });
    res.send(result);
  },

  getStyles: async (req, res) => {
    const inputId = req.params.product_id;
    const queryString = `SELECT productId, json_agg(json_build_object(
      'style_id', id,
      'name', name,
      'original_price', original_price,
      'sale_price', sale_price,
      'default?', (default_style::int::bool),
      'photos',
      (SELECT json_agg(json_build_object(
          'thumbnail_url', thumbnail_url,
          'url', url
        )) FROM photos WHERE style_id = styles.id),
    'skus',
      (SELECT
          json_object_agg(id,
              json_build_object(
            'size', size,
            'quantity', quantity
              )
          ) as skus
        FROM skus
        WHERE "styleId" = styles.id
            GROUP by "styleId")
    )) as results FROM styles
        WHERE styles.productid = ${inputId}
          GROUP BY productid;`;
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