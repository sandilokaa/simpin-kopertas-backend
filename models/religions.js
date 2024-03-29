'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Religions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Religions.hasOne(models.UserDetails);

    }
  }
  Religions.init({
    religionName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Religions',
  });
  return Religions;
};