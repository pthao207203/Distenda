const categoryHeader = require("../../middlewares/client/category.middleware")
const cartId = require("../../middlewares/client/cart.middleware")
const authMiddleware = require("../../middlewares/client/auth.middleware")

const courseRoutes = require("./courses.route");
const homeRoutes = require("./home.route");
const categoryRoutes = require("./category.route");
const searchRoutes = require("./search.route");
const authRoutes = require("./auth.route");
const userRoutes = require("./user.route");

module.exports = (app) => {
  app.use(categoryHeader.CateHeader);
  app.use(cartId.CartId);

  app.use('/', homeRoutes);
  app.use('/courses', authMiddleware.requireAuth, courseRoutes);
  app.use('/category', categoryRoutes);
  app.use('/search', searchRoutes);
  app.use('/auth', authRoutes);
  app.use('/user', authMiddleware.Auth, userRoutes)
}