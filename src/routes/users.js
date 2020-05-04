const express = require("express");
const router = express.Router();
const models = require("../database/models");

router.get("/users", async (req, res) => {
  try {
    const users = await models.user.findAll();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
