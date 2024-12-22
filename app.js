require("dotenv").config();

var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var handlebars = require('hbs'); // Added in Module Two

// Wire in the authentication module
var passport = require("passport");
// Bring in the database
require('./app_api/models/db'); // Added in Module Five
require("./app_api/config/passport"); // Added in Module Seven

var indexRouter = require('./app_server/routes/index'); // Updated in Module Two
var usersRouter = require('./app_server/routes/users'); // Updated in Module Two
var travelRouter = require('./app_server/routes/travel'); // Added in Module Two
var roomsRouter = require('./app_server/routes/rooms'); // Added in Module Three
var newsRouter = require("./app_server/routes/news"); // Added in Module Seven
var mealsRouter = require("./app_server/routes/meals"); // Added in Module Seven
var contactRouter = require("./app_server/routes/contact"); // Added in Module Seven
var aboutRouter = require("./app_server/routes/about"); // Added in Module Seven
var apiRouter = require('./app_api/routes/index'); // Added in Module Five

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views')); // Updated in Module Two
// register handlebars partials (https://www.npmjs.com/package/hbs) // Added in Module Two
handlebars.registerPartials(__dirname + '/app_server/views/partials'); // Added in Module Two
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(passport.initialize()); // Added in Module Seven

// Added in Module Six
// Allow CORS
app.use("/api", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
});

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use('/travel', travelRouter); // Added in Module Two
app.use('/rooms', roomsRouter); // Added in Module Three
app.use("/news", newsRouter); // Added in Module Seven
app.use("/meals", mealsRouter); // Added in Module Seven
app.use("/contact", contactRouter); // Added in Module Seven
app.use("/about", aboutRouter); // Added in Module Seven
app.use('/api', apiRouter); // Added in Module Five

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

// Catch unauthorized error and create 401
app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({ message: err.name + ": " + err.message });
  }
});

module.exports = app;