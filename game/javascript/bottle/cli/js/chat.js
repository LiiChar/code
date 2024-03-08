const canvas = document.getElementById("canvas");
const bottle = document.querySelector(".bottle");
const start = document.getElementById("start");

var startTime = null;
var duration = 4000; // Время в миллисекундах, за которое анимация должна быть выполнена
var angle = 0; // Текущий угол поворота
let isAnimate = false;
const urlApi = "http://localhost:8000";

let users = [];

const ctx = canvas.getContext("2d");
window.devicePixelRatio = 2;

const size = Math.floor(window.innerWidth / 3);
canvas.style.width = size + "px";
canvas.style.height = size + "px";

const scale = window.devicePixelRatio;

canvas.width = Math.floor(size * scale);
canvas.height = Math.floor(size * scale);

var centerX = canvas.width / 2;
var centerY = canvas.height / 2;
var radius = 300; // радиус окружности
var numElements = 0; // количество элементов на окружности

bottle.style.margin = size / 2 + -8 + "px";


start.addEventListener("click", () => (isAnimate ? null : animate(200)));
function animate(timestamp = 200) {
  if (!startTime) {
    startTime = timestamp;
  }

  isAnimate = true;

  var elapsed = timestamp - startTime;

  var speed =
    (Math.random() * (30 - 15) + 15) *
    (1 - Math.abs(elapsed - duration / 2) / (duration / 2));
  angle += speed;

  bottle.style.transform = "rotate(" + angle + "deg)";

  if (elapsed < duration) {
    requestAnimationFrame(animate);
  } else {
    getElem(angle % 360);
    startTime = timestamp;
    angle = Math.abs(angle % 360);
    isAnimate = false;
  }
}

const getElem = (angle) => {
  console.log(angle);
  let angleUsers = Math.ceil(360 / users.length);
  for (let i = 0; i < users.length; i++) {
      if (
        ((angleUsers * i) < angle) &&
        ( angleUsers * (i + 1)) > angle
      ) {
        winAdder(users[i].id);
      }
    }
  
};




function drawUsers() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawTable();
  var angleIncrement = (2 * Math.PI) / users.length;

  for (var i = 0; i < users.length; i++) {
    var angle = i * angleIncrement + Math.PI / users.length;

    
    // Вычисляем координаты элемента на окружности
    var x = centerX + radius * Math.cos(angle);
    var y = centerY + radius * Math.sin(angle);

    // Отрисовываем элемент на координатах (x, y)
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, 2 * Math.PI);
    ctx.font = "24px serif";
    ctx.fillText(users[i].id, x + 15, y);
    ctx.fillText(users[i].num, x + 15, y + 20);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();
  }
}


const winAdder = async (id) => {
  console.log(id);
  const fetchUsersJSON = await fetch(`${urlApi}/users/win?id=${id}`, {
    method: "POST",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  });
  const fetchUsers = fetchUsersJSON.json();
  users = await fetchUsers;
  drawUsers();
};

const getAllUser = async () => {
  const fetchUsersJSON = await fetch(urlApi + "/users", {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  });
  const fetchUsers = fetchUsersJSON.json();
  users = await fetchUsers;
  drawUsers();
};


const drawTable = () => {
  ctx.arc(centerX, centerY, radius, 0, Math.PI * 2, true); // Внешняя окружность
  ctx.stroke();
};

drawTable();

strings = {
  connected:
    "[sys][time]%time%[/time]: Вы успешно соединились к сервером как [user]%name%[/user].[/sys]",
  userJoined:
    "[sys][time]%time%[/time]: Пользователь [user]%name%[/user] присоединился к чату.[/sys]",
  messageSent: "[out][time]%time%[/time]: [user]%name%[/user]: %text%[/out]",
  messageReceived: "[in][time]%time%[/time]: [user]%name%[/user]: %text%[/in]",
  userSplit:
    "[sys][time]%time%[/time]: Пользователь [user]%name%[/user] покинул чат.[/sys]",
};

window.onload = function () {
  socket = io.connect(urlApi);

  socket.on("connect", function () {
    socket.on("message", function (msg) {
      // Добавляем в лог сообщение, заменив время, имя и текст на полученные
      if (
        msg.event === "userSplit" ||
        msg.event === "connected" ||
        msg.event === "userJoined"
      ) {
        getAllUser();
      }
      document.querySelector("#log").innerHTML +=
        strings[msg.event]
          .replace(/\[([a-z]+)\]/g, '<span class="$1">')
          .replace(/\[\/[a-z]+\]/g, "</span>")
          .replace(/\%time\%/, msg.time)
          .replace(/\%name\%/, msg.name)
          .replace(
            /\%text\%/,
            unescape(msg.text).replace("<", "&lt;").replace(">", "&gt;")
          ) + "<br>";
      // Прокручиваем лог в конец
      document.querySelector("#log").scrollTop =
        document.querySelector("#log").scrollHeight;
    });
    // При нажатии <Enter> или кнопки отправляем текст
    document.querySelector("#input").onkeypress = function (e) {
      if (e.which == "13") {
        socket.send(document.querySelector("#input").value);
        document.querySelector("#input").value = "";
      }
    };
    document.querySelector("#send").onclick = function () {
      socket.send(document.querySelector("#input").value);
      document.querySelector("#input").value = "";
    };
  });
};