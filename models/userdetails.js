'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      UserDetails.belongsTo(models.Users, {
        foreignKey: 'userId'
      });

      UserDetails.belongsTo(models.Religions, {
        foreignKey: 'religionId'
      });

      UserDetails.belongsTo(models.Genders, {
        foreignKey: 'genderId'
      });
      
    }
  }
  UserDetails.init({
    userId: DataTypes.INTEGER,
    genderId: DataTypes.INTEGER,
    religionId: DataTypes.INTEGER,
    placeOfBirth: DataTypes.STRING,
    address: DataTypes.TEXT,
    job: DataTypes.STRING,
    picture: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'UserDetails',
  });
  return UserDetails;
};