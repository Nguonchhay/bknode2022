'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Category }) {
      // define association here
      this.belongsTo(Category, { foreignKey: 'category_id' });
    }
  }
  Product.init({
    category_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    unit_price: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'Product',
    tableName: 'products'
  });
  return Product;
};