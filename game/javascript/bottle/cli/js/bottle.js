// const canvas = document.getElementById("canvas");
// const bottle = document.querySelector(".bottle");
// const start = document.getElementById("start");

// var startTime = null;
// var duration = 2000; // Время в миллисекундах, за которое анимация должна быть выполнена
// var angle = 0; // Текущий угол поворота
// let isAnimate = false

// const ctx = canvas.getContext("2d");
// window.devicePixelRatio = 2;

// const size = 500;
// canvas.style.width = size + "px";
// canvas.style.height = size + "px";

// const scale = window.devicePixelRatio;

// canvas.width = Math.floor(size * scale);
// canvas.height = Math.floor(size * scale);

// bottle.style.margin = size / 2 + -20 + "px";

// const drawTable = () => {
//   ctx.arc(canvas.width / 2, canvas.height / 2, 300, 0, Math.PI * 2, true); // Внешняя окружность
//   ctx.stroke();
// };

// drawTable();

// start.addEventListener("click", () => isAnimate ? null : animate(200));
// function animate(timestamp = 200) {
//   if (!startTime) {
//     startTime = timestamp;
//   }

//   isAnimate = true

//   var elapsed = timestamp - startTime;

//   // Вычисляем текущую скорость вращения в зависимости от прошедшего времени
//   var speed = (Math.random() * (20 - 5) + 5) * (1 - Math.abs(elapsed - duration / 2) / (duration / 2));
//   let a = getRotationAngle(bottle)
//   // Вычисляем угол поворота в зависимости от текущей скорости
//   angle += speed;
  
//   // Применяем поворот к элементу с помощью CSS-свойства transform
//   bottle.style.transform = "rotate(" + angle + "deg)";
  
//   if (elapsed < duration) {
//     requestAnimationFrame(animate);
//   } else {
//     getElem(angle)
//     // console.log(startTime, timestamp, angle);
//     startTime = timestamp
//     angle = angle % 360
//     isAnimate = false
//   }

// }

// const getElem = (angle) => {
//   console.log(angle % 360);
// }

// function getRotationAngle(target) {
//   const obj = window.getComputedStyle(target, null);
//   const matrix =
//     obj.getPropertyValue("-webkit-transform") ||
//     obj.getPropertyValue("-moz-transform") ||
//     obj.getPropertyValue("-ms-transform") ||
//     obj.getPropertyValue("-o-transform") ||
//     obj.getPropertyValue("transform");

//   let angle = 0;

//   if (matrix !== "none") {
//     const values = matrix.split("(")[1].split(")")[0].split(",");
//     const a = values[0];
//     const b = values[1];
//     angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
//   }

//   return angle < 0 ? (angle += 360) : angle;
// }
