const categoryHeader = require("../../middlewares/client/category.middleware")
const authMiddleware = require("../../middlewares/client/auth.middleware")
const settingMiddleware = require("../../middlewares/client/setting.middleware")

const courseRoutes = require("./courses.route");
const homeRoutes = require("./home.route");
const categoryRoutes = require("./category.route");
const searchRoutes = require("./search.route");
const authRoutes = require("./auth.route");
const userRoutes = require("./user.route");
const paymentRoute = require("./payment.route");
const payRoutes = require("./pay.route");
const videoRoutes = require("./video.route");
const exerciseRoutes = require("./exercise.route");
const bannerRoutes = require("./banner.route");
const notificationRoutes = require("./notification.route");
const messageRoutes = require("./message.route");

module.exports = (app) => {
  app.use(categoryHeader.CateHeader);
  app.use(settingMiddleware.Setting);
  app.use(authMiddleware.auth);

  app.use('/', homeRoutes);
  app.use('/courses', courseRoutes);
  app.use('/banner', bannerRoutes);
  app.use('/category', categoryRoutes);
  app.use('/search', searchRoutes);
  app.use('/auth', authRoutes);
  app.use('/user', authMiddleware.requireAuth, userRoutes)
  app.use('/video', authMiddleware.requireAuth, videoRoutes)
  app.use('/exercise', authMiddleware.requireAuth, exerciseRoutes)
 // Gắn route callback KHÔNG cần auth
 app.use('/payment', paymentRoute);
 app.use('/pay', payRoutes);
  app.use('/notification', authMiddleware.requireAuth, notificationRoutes)
  app.use('/message', authMiddleware.requireAuth, messageRoutes)
}