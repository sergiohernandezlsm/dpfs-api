const express = require("express");
const cors = require('cors');
const app = express();
const port = 8080;
const users = require("./src/routes/users");
// const db = require("./src/database/models");
// db.sequelize.sync();
app.use(cors());
app.use(express.json());

app.use("/", users).get('/', (req, res) => {
  res.send({ message: 'Public endpoint is live' });
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
