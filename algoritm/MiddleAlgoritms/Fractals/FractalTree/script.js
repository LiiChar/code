// var elem = document.getElementById('canvas');
// elem.height = 600;//размеры
// elem.width = 800;//холста
// var ctx = elem.getContext('2d');

// var depth = 11; //глубина рекурсивной функции
// ctx.lineWidth = 2; //толщина пера
// ctx.strokeStyle = '#00AA00';//цвет линий
// var step = 8.; //маштаб
// var startAngle = -Math.PI / 2;//начальный угол
// var slopeAngle = Math.PI / 8;//угол поворота

// function drawLine(x1, y1, x2, y2) {
//     ctx.moveTo(x1, y1); 
//     ctx.lineTo(x2, y2);
// }
// function drawTree(x1, y1, angle, depth) {
//     if (depth) {
//         var x2 = x1 + (Math.cos(angle) * depth * step);
//         var y2 = y1 + (Math.sin(angle) * depth * step);

//         drawLine(x1, y1, x2, y2);
//         drawTree(x2, y2, angle - slopeAngle, depth - 1);
//         drawTree(x2, y2, angle + slopeAngle, depth - 1);
//     }
// }
// ctx.beginPath();
// drawTree(elem.width / 2, elem.height, startAngle, depth);
// ctx.closePath();
// ctx.stroke();


// function drawPixel(x, y, context) {
//     context.fillRect(x, y, 1, 1);
// }

// canvas = document.getElementById("canvas");
// c = canvas.getContext("2d");
// c.fillStyle = "red";
// //Разметка прямоугольного треугольника Паскаля
// var tr = new Array(canvas.height);
// for (i = 0; i < canvas.height; i++) {
//     tr[i] = new Array(canvas.width);
//     for (k = 0; k < canvas.width; k++) {
//         if (k == 0)
//             tr[i][k] = 1;
//         else
//             tr[i][k] = 0;
//     }
// }

// for (i = 1; i < canvas.height; i++) {
//     for (k = 1; k < canvas.width; k++) {
//         tr[i][k] = (tr[i - 1][k - 1] + tr[i - 1][k]) % 2;
//     }
// }

// //Отрисовка
// for (i = 0; i < canvas.height; i++) {
//     for (k = 0; k < canvas.width; k++) {
//         if (tr[i][k] != 0)
//             drawPixel(k, i, c);
//     }
// }


var canvas = document.getElementById('canvas');
var N = 10;//квадратный размер в виде степени N. Можно поставить 12 и рассмотреть более детально, но оно может и зависать
canvas.height = canvas.width = Math.pow(2, N);
var context = canvas.getContext('2d');
var xr = context.canvas.width;
var yr = context.canvas.height;
var imgd = context.createImageData(xr, yr);
var pix = imgd.data;

var xmin = -2.0; var xmax = 1.0;
var ymin = -1.5; var ymax = 1.5;

// Добавим цветов
var mr0 = 0; var mg0 = 0; var mb0 = 0;
while(mr0 == mg0 || mr0 == mb0 || mg0 == mb0) 
{
    mr0 = Math.pow(2, Math.ceil(Math.random() * 3 + 3));
    mg0 = Math.pow(2, Math.ceil(Math.random() * 3 + 3));
    mb0 = Math.pow(2, Math.ceil(Math.random() * 3 + 3)); 
}
var mr1 = 256 / mr0; var mg1 = 256 / mg0; var mb1 = 256 / mb0;

var maxIt = 256;
var x = 0.0; var y = 0.0;
var zx = 0.0; var zx0 = 0.0; var zy = 0.0;
var zx2 = 0.0; var zy2 = 0.0;

for (var ky = 0; ky < yr; ky++)
{
    y = ymin + (ymax - ymin) * ky / yr;
    for(var kx = 0; kx < xr; kx++)
    {
        x = xmin + (xmax - xmin) * kx / xr;
        zx = x; zy = y;
        for(var i = 0; i < maxIt; i++)
        {
            zx2 = zx * zx; zy2 = zy * zy;
            if(zx2 + zy2 > 4.0) break;
            zx0 = zx2 - zy2 + x;
            zy = 2.0 * zx * zy + y;
            zx = zx0;
        }
        var p = (xr * ky + kx) * 4;
        pix[p] = i % mr0 * mr1;     // красный
        pix[p + 1] = i % mg0 * mg1; // зеленый
        pix[p + 2] = i % mb0 * mb1; // синий
        pix[p + 3] = 255;           // прозрачность
    }
}

context.putImageData(imgd, 0, 0);