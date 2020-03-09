function drawLine(ctx, firstPoint, secondPoint) {
    ctx.beginPath();
    ctx.moveTo(firstPoint[0], firstPoint[1]);
    ctx.lineTo(secondPoint[0], secondPoint[1]);
    ctx.stroke();
}

function drawEllipse(ctx, x, y, a, b) {
    ctx.save();
    ctx.beginPath();

    ctx.translate(x, y);

    ctx.scale(a / b, 1);
    ctx.arc(0, 0, b, 0, Math.PI * 2, true);

    ctx.restore();
    ctx.closePath();
    ctx.stroke();
}