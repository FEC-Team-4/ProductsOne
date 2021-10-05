module.exports = (sequelize, DataTypes) => {
  const Features = sequelize.define('Features', {
    product_id: {
      type: DataTypes.INTEGER
    },
    feature: {
      type: DataTypes.STRING
    },
    value: {
      type: DataTypes.STRING
    }
  });

  return Features;
};
