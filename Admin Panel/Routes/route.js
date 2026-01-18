const express = require("express")
const route = express.Router()
const ctl = require("../Controller/ctl")
const multer = require("../middleware/multer")

route.get("/",ctl.dashboard)
route.get("/form",ctl.form)
route.get("/table",ctl.table)
route.post("/postdata",multer,ctl.postdata)

module.exports = route