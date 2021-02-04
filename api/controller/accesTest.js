const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  return res.status(200).send({
    type: "succes",
    data: "API disponível",
  });
});

module.exports = (app) => app.use("/", router);
