const { Router } = require("express");
const { homePage ,signupPage,loginPage} = require("../controller/blog.controller");

const router = Router()

router.get('/',homePage)
router.get('/signup',signupPage)
router.get('/login',loginPage)

module.exports = router
