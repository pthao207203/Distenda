const categoryHeader = require("../../middlewares/client/category.middleware")
const authMiddleware = require("../../middlewares/client/auth.middleware")
const settingMiddleware = require("../../middlewares/client/setting.middleware")

const courseRoutes = require("./courses.route");
const homeRoutes = require("./home.route");
const categoryRoutes = require("./category.route");
const searchRoutes = require("./search.route");
const authRoutes = require("./auth.route");
const userRoutes = require("./user.route");
const payRoutes = require("./pay.route");
const videoRoutes = require("./video.route");
const exerciseRoutes = require("./exercise.route");

module.exports = (app) => {
  app.use(categoryHeader.CateHeader);
  app.use(settingMiddleware.Setting);
  app.use(authMiddleware.auth);

  app.use('/', homeRoutes);
  app.use('/courses', courseRoutes);
  app.use('/category', categoryRoutes);
  app.use('/search', searchRoutes);
  app.use('/auth', authRoutes);
  app.use('/user', authMiddleware.requireAuth, userRoutes)
  app.use('/video', authMiddleware.requireAuth, videoRoutes)
  app.use('/exercise', authMiddleware.requireAuth, exerciseRoutes)
  app.use('/pay', authMiddleware.requireAuth, payRoutes)
}