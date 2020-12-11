const express = require("express");
const router = express.Router();
const models = require("../database/models");
const yearMiddleware = require("../middleware/addProp");

router.get("/users", yearMiddleware, async (req, res) => {
  try {
    const users = await models.user.findAll({
    });
    if (users.length === 0) {
      return res.status(404).json({ message: 'users not found' });
    }
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: `${err} in server` });
  }
});

router.get("/users/:id", async (req, res) => {
  try {
    const user = await models.user.findByPk(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: `${err} in server` });
  }
});

router.post("/users", async (req, res) => {
  try {
    const user = await models.user.build(req.body);
    await user.save();
    res.status(200).send(user.toJSON());
  } catch (err) {
    res.status(500).json({ message: `${err} in server` });
  }
});

router.patch("/users/:id", yearMiddleware, async (req, res) => {
  try {
    const user = await models.user.findByPk(req.params.id);
    await user.update(req.body);
    res.status(200).send(user.toJSON());
  } catch (err) {
    res.status(500).json({ message: `${err} in server` });
  }
});

router.delete("/users/:id", async (req, res) => {
  try {
    const user = await models.user.findByPk(req.params.id);
    await user.destroy();
    res.status(200).send();
  } catch (err) {
    res.status(500).json({ message: `${err} in server` });
  }
});

module.exports = router;
