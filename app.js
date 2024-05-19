/*
 * @Description: 项目入口文件
 * @Author: wangxiaolong@myhexin.com
 * @Date: 2024-05-19 17:28:24
 * @LastEditTime: 2024-05-19 17:39:11
 * @LastEditors: wangxiaolong@myhexin.com
 */
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
//配置ejs模板引擎
app.set("view engine", "jade");
// 日志模块
app.use(logger("dev"));
// 解析请求体中的JSON数据
app.use(express.json());
// 用于解析URL编码的请求体，将其转换为JSON对象，以便在后续的请求处理过程中使用。
app.use(express.urlencoded({ extended: false }));
//配置静态资源目录
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

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

module.exports = app;
