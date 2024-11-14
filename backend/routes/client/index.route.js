const courseRoutes = require("./courses.route");
const homeRoutes = require("./home.route");
const categoryRoutes = require("./category.route");

module.exports = (app) => {

  app.use('/', homeRoutes);
  
  app.use('/courses', courseRoutes);
  app.use('/category', categoryRoutes);
}