"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require("../config/config.js")[env];
const db = {};

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  { ...config }
);

// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], {
//     host: "api_container_db",
//     port: 3306,
//     dialect: "mysql",
//   });
// } else {
//   sequelize = new Sequelize("dpfs_database", "root", "password123", {
//     host: "api_container_db",
//     port: 3306,
//     dialect: "mysql",
//   });
// }

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = sequelize["import"](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
