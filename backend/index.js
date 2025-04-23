const flash = require("express-flash");
const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const moment = require("moment");
const cors = require("cors");

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

app.use(
  "/tinymce",
  express.static(path.join(__dirname, "node_modules", "tinymce"))
);

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    credentials: true, // Cho phép gửi cookies
  })
);

app.use((req, res, next) => {
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
  res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
  next();
});

app.use(methodOverride("_method"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// parse application/x-www-form-urlencoded
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

// parse application/json
app.use(bodyParser.json());

app.use(cookieParser("IE104"));
app.use(
  session({
    cookie: {
      maxAge: 60000,
    },
  })
);
app.use(flash());

// App Locals Variables
app.locals.prefixAdmin = systemConfig.prefixAdmin;
app.locals.moment = moment;

app.use(express.static("public"));

// Định tuyến Admin và Client
routeAdmin(app);
routeClient(app);

app.get("*", (req, res) => {
  res.render("client/pages/error/404", {
    pageTitle: "404 not found",
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
