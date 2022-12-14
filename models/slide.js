'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Slide extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Slide.belongsTo(models.Organization, { as: 'organization' });
    }
  }
  Slide.init(
    {
      imageUrl: DataTypes.TEXT,
      text: DataTypes.STRING,
      order: DataTypes.INTEGER,
      organizationId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Slide',
      paranoid: true
    }
  );
  return Slide;
};
