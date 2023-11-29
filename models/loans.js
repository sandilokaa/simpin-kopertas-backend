'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Loans extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Loans.belongsTo(models.Users, {
        foreignKey: 'userId'
      });

      Loans.belongsTo(models.LoanTypes, {
        foreignKey: 'typeId'
      });

    }
  }
  Loans.init({
    userId: DataTypes.INTEGER,
    typeId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    loanDate: DataTypes.STRING,
    nominal: DataTypes.INTEGER,
    installmentAmount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Loans',
  });
  return Loans;
};