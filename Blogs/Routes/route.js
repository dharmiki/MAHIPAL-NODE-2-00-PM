const express = require("express");
const router = express.Router();
const ctl = require("../Controller/ctl");

router.get("/", ctl.home);
router.post("/addBlog", ctl.addBlog);
router.get("/deleteBlog", ctl.deleteBlog);
router.get("/editBlog", ctl.editBlog);
router.post("/updateBlog", ctl.updateBlog);

module.exports = router;
