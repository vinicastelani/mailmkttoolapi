const mongoose = require("../database")

const ComponentSchema = new mongoose.Schema({
    title:{
        type: String,
        required:true
    },
    html:{
        type:String,
        required:true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

const Component = mongoose.model("Component", ComponentSchema)

module.exports = Component