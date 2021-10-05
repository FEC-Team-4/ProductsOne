const {sequelize} = require('../models/index.js');
const {QueryTypes} = require('sequelize');

module.exports = {
  getProducts: async (req, res) => {
    let { page, count } = req.query;
    if (!page) { page = 1; };
    if (!count) { count = 5; };
    let updateCount = count * (page-1);
    const queryString = `SELECT * FROM public.product LIMIT ${page} OFFSET ${updateCount};`;
    const result = await sequelize.query(queryString,  { type: QueryTypes.SELECT });
    res.send(result);
  },

  getProductInfo: async (req, res) => {
    const inputId = req.params.product_id;
    const queryString = `SELECT p.*, json_agg(json_build_object(
      'feature', f.feature,
     'value', f.value
    )) AS features FROM PRODUCT AS p JOIN FEATURES AS f ON p.id = f.product_id WHERE p.id = ${inputId} group by p.id;`;

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


  // SELECT productId, json_agg(json_build_object(
  //   'style_id', id,
  //   'name', name,
  //   'original_price', original_price,
  //   'sale_price', sale_price,
  //   'default?', (default_style::int::bool),
  //   'photos',
  //   (SELECT json_agg(json_build_object(
  //       'thumbnail_url', thumbnail_url,
  //       'url', url
  //     )) FROM photos WHERE style_id = styles.id),
  // 'skus',
  //   (SELECT
  //       json_object_agg(id,
  //           json_build_object(
  //         'size', size,
  //         'quantity', quantity
  //           )
  //       ) as skus
  //     FROM skus
  //     WHERE "styleId" = styles.id
  //         GROUP by "styleId")
  // )) as results FROM styles
  //     WHERE styles.productid = ${inputId}
  //       GROUP BY productid;

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