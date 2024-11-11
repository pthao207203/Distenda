const systemConfig = require("../../config/system")
const dashboardRoute = require("./dashboard.route");
const courseRoute = require("./course.route");
const categoryRoute = require("./category.route");
const roleRoute = require("./role.route");

module.exports = (app) => {

  app.use(systemConfig.prefixAdmin + `/dashboard`, dashboardRoute);
  app.use(systemConfig.prefixAdmin + `/courses`, courseRoute);
  app.use(systemConfig.prefixAdmin + `/category`, categoryRoute);
  app.use(systemConfig.prefixAdmin + `/role`, roleRoute);
}