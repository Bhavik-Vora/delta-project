const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const{saveRedirectUrl,} = require("../middleware");
const passport = require("passport");
const userController = require("../controllers/users");



router.route("/signup").get(userController.renderSignUpForm)
.post(wrapAsync(userController.signup));


router.route("/login").get(userController.renderLoginForm)
.post(saveRedirectUrl,passport.authenticate("local",{failureRedirect :"/login",failureFlash:true}),userController.login);


router.get("/logout",userController.logout)
module.exports = router;

router



