const courseRoutes = require("./courses.route");
const homeRoutes = require("./home.route");

module.exports = (app) => {
  app.use('/', homeRoutes);
  
  app.use('/courses', courseRoutes);
  
}