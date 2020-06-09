const express = require("express");
const router = express.Router();
const models = require("../database/models");
const yearMiddleware = require("../middleware/addProp");

router.get("/histories", yearMiddleware, async (req, res) => {
  try {
    const users = await models.history.findAll({
      // attributes: ["first_name"],
      // where: {
      //   ["first_name"]: "sergiosssss",
      // },
    });
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/histories/:id", async (req, res) => {
  try {
    const user = await models.history.findByPk(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/histories", async (req, res) => {
  try {
    const user = await models.history.build(req.body);
    await user.save();
    res.status(200).send(user.toJSON());
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.patch("/histories/:id", yearMiddleware, async (req, res) => {
  try {
    const user = await models.history.findByPk(req.params.id);
    await user.update(req.body);
    res.status(202).send(user.toJSON());
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete("/histories/:id", async (req, res) => {
  try {
    const user = await models.history.findByPk(req.params.id);
    await user.destroy();
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
