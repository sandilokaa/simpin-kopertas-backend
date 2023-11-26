'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PrincipalSavings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      PrincipalSavings.belongsTo(models.Users, {
        foreignKey: 'userId'
      });

    }
  }
  PrincipalSavings.init({
    userId: DataTypes.INTEGER,
    name:DataTypes.STRING,
    depositeDate: DataTypes.STRING,
    nominal: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PrincipalSavings',
  });
  return PrincipalSavings;
};