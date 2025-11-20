// const http = require('http');
const express = require('express')


// const server = http.createServer((req , res)=>{
//     res.writeHead(200,{"content-type" : "text/html"})
//     res.write("<h1>hello dev</h1>")
//     res.end()
// })

const app = express()

app.get("/home",(req , res)=>{
    res.send("<p>hello world</p>");
})


app.listen(2000,(req , res)=>{
    console.log("server is running on port 2000");
})
