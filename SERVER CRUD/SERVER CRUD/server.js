const express=require('express')
const dotenv=require("dotenv")
const  db  = require('./config/database')
dotenv.config()
const app=express()


app.use(express.urlencoded({extended:true}))
app.listen(process.env.port,(err)=>{
    err ? console.log(err): console.log("your server is running on the port" +process.env.port)
})