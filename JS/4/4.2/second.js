const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.lineWidth = 5;

function drawLine(firstPoint, secondPoint) {
    ctx.beginPath();
    ctx.moveTo(firstPoint[0], firstPoint[1]);
    ctx.lineTo(secondPoint[0], secondPoint[1]);
    ctx.stroke();
}


// function drawEllipse(ctx, coords, sizes, angle) {
//     ctx.beginPath();
//     ctx.save(); // сохраняем стейт контекста
//     ctx.translate(coords[0], coords[1]); // перемещаем координаты в центр эллипса
//     ctx.rotate(angle); // поворачиваем координатную сетку на нужный угол
//     ctx.scale(1, sizes[1]/sizes[0]); // сжимаем по вертикали
//     ctx.arc(0, 0, sizes[0], 0, Math.PI*2); // рисуем круг
//     ctx.restore(); // восстанавливает стейт, иначе обводка и заливка будут сплющенными и повёрнутыми
//     ctx.strokeStyle = 'green';
//     ctx.stroke(); // обводим
//     ctx.closePath();
// }

function drawEllipse(ctx, x, y, a, b) {
    // Запоминаем положение системы координат (CК) и масштаб
    ctx.save();
    ctx.beginPath();

    // Переносим СК в центр будущего эллипса
    ctx.translate(x, y);

    /*
     * Масштабируем по х.
     * Теперь нарисованная окружность вытянется в a / b раз
     * и станет эллипсом
     */

    ctx.scale(a / b, 1);

    // Рисуем окружность, которая благодаря масштабированию станет эллипсом
    ctx.arc(0, 0, b, 0, Math.PI * 2, true);

    // Восстанавливаем СК и масштаб
    ctx.restore();

    ctx.closePath();
    ctx.stroke();
}



drawLine([0, 250], [500, 250]);
drawLine([250, 0], [250, 500]);
drawEllipse(ctx, [250, 250], [150, 150], Math.PI/4, 1000);

