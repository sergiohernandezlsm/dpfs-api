const express = require("express");
const app = express();
const port = 8080;
const users = require("./src/routes/users");
// const db = require("./src/database/models");
// db.sequelize.sync();

app.use(express.json());
app.use("/", users);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
