"use strict";
module.exports = (sequelize, DataTypes) => {
  const history = sequelize.define(
    "history",
    {
      title: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
    },
    {}
  );
  history.associate = function (models) {
    // associations can be defined here
  };
  return history;
};
