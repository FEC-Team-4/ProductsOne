const db = require("../models/index.js");
const Product = db.productInfo;

exports.getQuestionList = async () => {

  let result =  await Product.find({
    limit: 5
  })

  return result.rows[0];
};

console.log(getQuestionList());