'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class VoluntarySavings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      VoluntarySavings.belongsTo(models.Users, {
        foreignKey: 'userId'
      });

    }
  }
  VoluntarySavings.init({
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    depositeDate: DataTypes.STRING,
    nominal: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'VoluntarySavings',
  });
  return VoluntarySavings;
};