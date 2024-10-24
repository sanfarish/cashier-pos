'use strict';
const {
  Model
} = require('sequelize');
const category = require('./category');
module.exports = (sequelize, DataTypes) => {
  class menus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // menus.hasOne(models.category);
      menus.belongsTo(models.category, { foreignKey: 'category_id' });
    }
  }
  menus.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    name: DataTypes.STRING,
    category_id: DataTypes.UUID,
    price: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'menus',
  });
  return menus;
};