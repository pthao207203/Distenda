const flash = require("express-flash");
const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const moment = require("moment");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

require("dotenv").config();

const systemConfig = require("./config/system");

const routeAdmin = require("./routes/admin/index.route");
const routeClient = require("./routes/client/index.route");

const database = require("./config/database");
database.connect();

const app = express();
const port = process.env.PORT;

// TiniMCE
app.use(
  "/tinymce",
  express.static(path.join(__dirname, "node_modules", "tinymce"))
);

app.use(methodOverride("_method"));

app.set("views", "./views");
app.set("view engine", "pug");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(cookieParser("IE104"));
app.use(session({ cookie: { maxAge: 60000 } }));
app.use(flash());

// App Locals Variables
app.locals.prefixAdmin = systemConfig.prefixAdmin;
app.locals.moment = moment;

app.use(express.static("public"));

routeAdmin(app);
routeClient(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
