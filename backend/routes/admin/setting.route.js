const express = require("express");
const multer = require("multer");
const router = express.Router();

const upload = multer();

const uploadCloud = require("../../middlewares/admin/uploadCloud.middleware");
const controller = require("../../controllers/admin/setting.controller");

router.get("/general", controller.general);

router.post("/general",
  // upload.fields([
  //   { name: 'WebsiteLogoAdmin', maxCount: 1 },
  //   { name: 'WebsiteLogoUser', maxCount: 1 },
  //   { name: 'WebsiteIcon', maxCount: 1 }
  // ]),
  // uploadCloud.uploads,
  controller.generalPatch
);


module.exports = router;