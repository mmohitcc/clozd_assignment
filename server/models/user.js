'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    title: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    street: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    postcode: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    dob: DataTypes.DATE,
    sex: DataTypes.STRING,
    image_url: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};