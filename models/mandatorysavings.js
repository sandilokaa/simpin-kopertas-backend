'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MandatorySavings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      MandatorySavings.belongsTo(models.Users, {
        foreignKey: 'userId'
      });

    }
  }
  MandatorySavings.init({
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    depositeDate: DataTypes.STRING,
    nominal: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'MandatorySavings',
  });
  return MandatorySavings;
};