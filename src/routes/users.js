const express = require("express");
const router = express.Router();
// const Users = require("../database/models/Users");

router.use("/", (req, res) => res.send({ test: "seee" }));

module.exports = router;
