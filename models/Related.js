module.exports = (sequelize, DataTypes) => {
  const Related = sequelize.define('related', {
    current_product_id: {
      type: DataTypes.INTEGER
    },
    related_product_id: {
      type: DataTypes.INTEGER
    }
  });

  return Related;
};

