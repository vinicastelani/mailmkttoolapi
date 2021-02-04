const express = require("express");
const Mail = require("../models/Mail");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { _id } = req.body.html;
    if (
      await Mail.findOneAndUpdate(
        { _id },
        { $inc: { downloads: 1 } },
        { useFindAndModify: false }
      )
    ) {
      return res.status(200).send({
        msg: { type: "success", data: "Quantidade de downloads atualizada" },
      });
    }
    await Mail.create(req.body);
    return res.status(200).send({
      msg: { type: "success", data: "Email adicionado a base" },
    });
  } catch (err) {
    return res.status(404).send({
      msg: { type: "error", data: "Não foi possível salvar o email" },
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const mail = await Mail.find();
    if (!mail.length) {
      return res.status(200).send({
        msg: {
          type: "warning",
          data: "Não há nenhum item cadastrado na base.",
        },
      });
    }
    return res.status(200).send({
      msg: {
        type: "success",
        data: "Encontrados emails na base de dados.",
      },
      data: mail,
    });
  } catch (err) {
    return res.status(400).send({
      msg: {
        type: "error",
        data: "Não foi possível retornar os emails.",
      },
    });
  }
});

module.exports = (app) => app.use("/mail", router);
