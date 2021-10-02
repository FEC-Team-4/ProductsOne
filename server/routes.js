const express = require('express');
const router = express.Router();
const controller = require('../controller/index.js')

//product list
router.get('/products', controller.getProducts);

//product info
router.get('/products/:product_id', controller.getProductInfo);

//styles
router.get('/products/:product_id/styles', controller.getStyles);

//related
router.get('/products/:product_id/related', controller.getRelated);

module.exports = router;