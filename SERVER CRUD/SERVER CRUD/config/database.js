const mongooose=require("mongoose")
mongooose.connect("mongodb://127.0.0.1//apis")

db=mongooose.connection

db.once("open",(err)=>{
    err ? console.log(err):console.log("your server is connected to your server")
})

module.exports = db