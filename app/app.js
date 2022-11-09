"use strict";

// 모듈
const express = require("express");
const app = express();
const morgan = require("morgan");

// 라우팅
const homeRouter = require("./src/routes/home");

//앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

//미들웨어
app.use("/", homeRouter);
app.use(morgan("dev"));
app.use(express.static(`${__dirname}/src/public`));

module.exports = app;

// nodejs 내장 http모듈로 서버 띄워보기
// const http = require("http");
// const app = http.createServer((req, res) => {
//   res.writeHead(200, {
//     "Content-Type": "text/html; charset=utf-8",
//   });
//   if (req.url === "/") {
//     res.end("루트!");
//   } else if (req.url === "/login") {
//     res.end("로그인!");
//   }
// });

// app.listen(3001, () => {
//   console.log("http server ready");
// });
