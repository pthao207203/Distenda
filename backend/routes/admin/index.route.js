const authRoute = require("./auth.route");

const authMiddleware = require("../../middlewares/admin/auth.middleware");

module.exports = (app) => {
  app.use(`/auth`, authRoute);
}