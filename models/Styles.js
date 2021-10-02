module.exports = (sequelize, DataTypes) => {
  const Styles = sequelize.define('styles', {
    productId: {
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING
    },
    sale_price: {
      type: DataTypes.STRING
    },
    original_price: {
      type: DataTypes.STRING
    },
    default_style: {
      type: DataTypes.INTEGER
    }
  });

  return Styles;
};
