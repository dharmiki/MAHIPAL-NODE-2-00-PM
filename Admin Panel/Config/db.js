const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1/Project-7")

let db = mongoose.connection
db.once("open",(err)=>{
    err ? console.log("err" +err) : console.log("Your Database is connected to your Server")
})

module.exports = db