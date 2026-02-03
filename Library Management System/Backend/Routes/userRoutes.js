const router = require("express").Router();
const user = require("../controllers/userController");
const isAuth = require("../Middleware/Auth");

router.get("/books", isAuth, user.getBooks);
router.post("/issue/:bookId", isAuth, user.issueBook);
router.patch("/return/:issueId", isAuth, user.returnBook);

module.exports = router;
