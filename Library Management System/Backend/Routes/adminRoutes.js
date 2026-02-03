const router = require("express").Router();
const admin = require("../controllers/adminController");
const isAuth = require("../Middleware/Auth");
const isAdmin = require("../Middleware/isAdmin");

router.post("/book", isAuth, isAdmin, admin.addBook);
router.get("/issues", isAuth, isAdmin, admin.getAllIssues);
router.get("/dashboard", isAuth, isAdmin, admin.dashboard);

module.exports = router;
