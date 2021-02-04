const express = require("express")
const Component = require("../models/Component")
const router = express.Router()

router.post("/", async (req, res)=>{
    try{
        await Component.create(req.body)
        return res.status(200).send({
            msg:{ type:"success", data:"Email adicionado a base"}
      })
    }catch(err){
        return res.status(404).send({
            msg:{ type:"error", data:"Não foi possível adicionar o email"}
        })
    }
})

router.get("/", async (req, res) =>{
    try{
        const component = await Component.find()
        if (!component.length) {
            return res.status(200).send({
                msg:{ 
                    type:"warning", 
                    data:"Não há nenhum item cadastrado na base."
                }
            })
        }
        return res.status(200).send({
            msg:{ 
                type:"success", 
                data:"Encontrados componentes na base de dados."
            },
            data: component
        })
    }catch(err){
        return res.status(400).send({
            msg:{ 
                type:"error", 
                data:"Não foi possível retornar os componentes."
            }
        })
    }
})

module.exports = (app) => app.use("/component", router)