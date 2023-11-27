'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Users.hasOne(models.UserDetails);
      Users.hasMany(models.PrincipalSavings);
      Users.hasMany(models.MandatorySavings);
      Users.hasMany(models.VoluntarySavings);
    
    }
  }
  Users.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    memberNumber: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    registrationDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};