module.exports = (sequelize, DataTypes) => {
  const Skus = sequelize.define('skus', {
    styleId: {
      type: DataTypes.INTEGER
    },
    size: {
      type: DataTypes.STRING
    },
    quantity: {
      type: DataTypes.INTEGER
    }
  });

  return Skus;
};


