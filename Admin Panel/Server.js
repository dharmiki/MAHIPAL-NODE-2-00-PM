const express = require("express")
const port = 1001
const app = express()
const path = require("path")
const db = require("./Config/db")


app.set("view engine","ejs")
app.use(express.urlencoded({ extended: true }))
app.use("/",require("./Routes/route"))
app.use(express.static(path.join(__dirname, "Public")))


app.listen(port,err=>{
    err ? console.log(err) : console.log("your server is created succesfully on the port " +port)
})

// add to schema ma make the database schmea create kariyu have aana controller ma connect karse , crud , authe , password , estriction , profile page, logout , 