const systemConfig = require("../../config/system");

const authMiddleware = require("../../middlewares/admin/auth.middleware");

const dashboardRoute = require("./dashboard.route");
const courseRoute = require("./course.route");
const categoryRoute = require("./category.route");
const roleRoute = require("./role.route");
const adminRoute = require("./admin.route");
const userRoute = require("./user.route");
const authRoute = require("./auth.route");
const lessonRoute = require("./lesson.route");
const videoRoute = require("./video.route");
const exerRoute = require("./exercise.route");
const accountRoute = require("./my-account.route");
const settingRoute = require("./setting.route");
const payRoute = require("./pay.route");
const bannerRoute = require("./banner.route");
const voucherRoute = require("./voucher.route");
const messageRoute = require("./message.route")

module.exports = (app) => {
  app.use(
    systemConfig.prefixAdmin + `/dashboard`,
    authMiddleware.requireAuth,
    dashboardRoute
  );
  app.use(
    systemConfig.prefixAdmin + `/courses`,
    authMiddleware.requireAuth,
    courseRoute
  );
  app.use(
    systemConfig.prefixAdmin + `/category`,
    authMiddleware.requireAuth,
    categoryRoute
  );
  app.use(
    systemConfig.prefixAdmin + `/role`,
    authMiddleware.requireAuth,
    roleRoute
  );
  app.use(
    systemConfig.prefixAdmin + `/admin`,
    authMiddleware.requireAuth,
    adminRoute
  );
  app.use(
    systemConfig.prefixAdmin + `/user`,
    authMiddleware.requireAuth,
    userRoute
  );
  app.use(
    systemConfig.prefixAdmin + `/lesson`,
    authMiddleware.requireAuth,
    lessonRoute
  );
  app.use(
    systemConfig.prefixAdmin + `/video`,
    authMiddleware.requireAuth,
    videoRoute
  );
  app.use(
    systemConfig.prefixAdmin + `/exercise`,
    authMiddleware.requireAuth,
    exerRoute
  );
  app.use(
    systemConfig.prefixAdmin + `/my-account`,
    authMiddleware.requireAuth,
    accountRoute
  );
  app.use(
    systemConfig.prefixAdmin + `/setting`,
    authMiddleware.requireAuth,
    settingRoute
  );
  app.use(
    systemConfig.prefixAdmin + `/pay`,
    authMiddleware.requireAuth,
    payRoute
  );
  app.use(
    systemConfig.prefixAdmin + `/banner`,
    authMiddleware.requireAuth,
    bannerRoute
  );
  app.use(
    systemConfig.prefixAdmin + `/voucher`,
    authMiddleware.requireAuth,
    voucherRoute
  );
  app.use(
    systemConfig.prefixAdmin + `/message`, 
    authMiddleware.requireAuth, 
    messageRoute
  );

  app.use(systemConfig.prefixAdmin + `/auth`, authRoute);
};

