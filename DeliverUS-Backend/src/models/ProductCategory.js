import { Model } from 'sequelize'
const loadModel = (sequelize, DataTypes) => {
  class ProductCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ProductCategory.belongsTo(models.Restaurant, { foreignKey: 'restaurantId', as: 'restaurant' })
      ProductCategory.hasMany(models.Product)
    }
  }
  ProductCategory.init({
    restaurantId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    name:{
      allowNull: false,
      type: DataTypes.STRING
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: new Date()
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: new Date()
    }
  }, {
    sequelize,
    modelName: 'ProductCategory'
  })
  return ProductCategory
}
export default loadModel
