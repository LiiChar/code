// Подключаем модуль и ставим на прослушивание 8080-порта - 80й обычно занят под http-сервер
const { Server } = require("socket.io");
const express = require("express");
const http = require("http");
const cors = require("cors");

let user = [];

const addUser = (id, num) => {
  user.push({ id, num });
};

const app = express(); 

const server = http.createServer(app, {
  cors: {
    origin: '*',
    methods: ["GET", "POST"],
}
});
app.use(cors({ origin: '*' }))

app.use(express.json())

app.get("/users", (req, res) => {
  return res.json(user);
});

app.post("/users/win", (req, res) => {
  user[user.findIndex((us) => req.query.id === us.id)].num += 1;
  return res.json(user);
});

// server.prependListener("request", (req, res) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   res.header("Access-Control-Allow-Headers", "Content-Type");
//   res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
// });

const io = new Server(server, {
  cors: {
      origin: '*',
      methods: ["GET", "POST"],
  }
})


// Навешиваем обработчик на подключение нового клиента
io.sockets.on("connection", function (socket) {
  // Т.к. чат простой - в качестве ников пока используем первые 5 символов от ID сокета
  var ID = socket.id.toString().substr(0, 5);
  addUser(ID, 0);
  var time = new Date().toLocaleTimeString();
  // Посылаем клиенту сообщение о том, что он успешно подключился и его имя
  socket.send({ event: "connected", name: ID, time: time });
  // Посылаем всем остальным пользователям, что подключился новый клиент и его имя
  socket.broadcast.emit("message", {
    event: "userJoined",
    name: ID,
    time: time,
  });
  // Навешиваем обработчик на входящее сообщение
  socket.on("message", function (msg) {
    var time = new Date().toLocaleTimeString();
    // Уведомляем клиента, что его сообщение успешно дошло до сервера
    socket.send({ event: "messageSent", name: ID, text: msg, time: time });
    // Отсылаем сообщение остальным участникам чата
    socket.broadcast.emit("message", {
      event: "messageReceived",
      name: ID,
      text: msg,
      time: time,
    });
  });
  // При отключении клиента - уведомляем остальных
  socket.on("disconnect", function () {
    user = user.filter((el) => el.id !== ID);
    var time = new Date().toLocaleTimeString();
    io.sockets.send({ event: "userSplit", name: ID, time: time });
  });
});

const PORT = 8000;


server.listen(8000, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
 
//   const PIXEL_RATIO = (function () {
//     const ctx = document.createElement("canvas").getContext("2d"),
//         dpr = window.devicePixelRatio || 1,
//         bsr = ctx.webkitBackingStorePixelRatio ||
//               ctx.mozBackingStorePixelRatio ||
//               ctx.msBackingStorePixelRatio ||
//               ctx.oBackingStorePixelRatio ||
//               ctx.backingStorePixelRatio || 1;

//     return dpr / bsr;
// })();

// createHiDPICanvas = function(w, h, ratio) {
//     if (!ratio) { ratio = PIXEL_RATIO; }
//     const can = document.createElement("canvas");
//     can.width = w * ratio;
//     can.height = h * ratio;
//     can.style.width = w + "px";
//     can.style.height = h + "px";
//     can.getContext("2d").setTransform(ratio, 0, 0, ratio, 0, 0);
//     return can;
// }

// const myCanvas = createHiDPICanvas(500, 500);


// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   res.header("Access-Control-Allow-Headers", "Content-Type");
//   res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
//   console.log(res);
//   next();
// });