require("dotenv").config();

const environments = ["development", "staging", "production", "test"];

module.exports = environments.reduce((result, value) => {
  return Object.assign({}, result, {
    [value]: {
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      dialect: "mysql",
    },
  });
}, {});
