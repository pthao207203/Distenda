const express = require("express");
const router = express.Router();

const controller = require("../../controllers/admin/auth.controller");

router.get("/login", controller.login);

router.post("/login", controller.loginPost);

router.get("/logout", controller.logout);

router.get("/setting", controller.setting);

module.exports = router;
