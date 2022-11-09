"use strict";

// 모듈
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const morgan = require("morgan");

// 라우팅
const homeRouter = require("./src/routes/home");

//앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

//미들웨어
//값을 받아오는 부분은 라우터보다 상단에 와 있어야한다.
app.use(bodyParser.json());
//url을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({ extended: true }));
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
