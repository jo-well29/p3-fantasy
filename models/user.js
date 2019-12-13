'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    product: DataTypes.STRING,
    email: DataTypes.STRING,
    password_digest: DataTypes.STRING,
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Coder, {
      foreignKey: 'userId'
    })

  };
  return User;
};