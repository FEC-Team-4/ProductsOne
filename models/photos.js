module.exports = (sequelize, DataTypes) => {
  const Photos = sequelize.define('photos', {
    styleid: {
      type: DataTypes.INTEGER
    },
    thumbnail_url: {
      type: DataTypes.STRING
    },
    url: {
      type: DataTypes.STRING
    }
  });

  return Photos;
};



