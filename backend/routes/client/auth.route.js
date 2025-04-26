const express = require("express");
const router = express.Router();

const controller = require("../../controllers/client/auth.controller");

router.get("/login", controller.login);

router.post("/login", controller.loginPost);

router.post("/login/facebook", controller.loginFacebook);

router.post("/login/google", controller.loginGoogle);

router.get("/logout", controller.logout);

router.get("/register", controller.register);

router.post("/register", controller.registerPost);

router.post("/password/forgot", controller.passwordForgot);

router.post("/password/otp", controller.passwordOTP);

router.post("/password/new", controller.passwordNew);

router.get("/setting", controller.setting);

module.exports = router;
