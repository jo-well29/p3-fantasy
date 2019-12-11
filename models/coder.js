'use strict';
module.exports = (sequelize, DataTypes) => {
  const Coder = sequelize.define('Coder', {
    name: DataTypes.STRING,
    expertise: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
        as: 'userId'
      }
    }
  }, {});
  Coder.associate = function(models) {
    // associations can be defined here
    Coder.belongsTo(models.User, {
      foreignKey: 'userId'
    })
  };
  return Coder;
};