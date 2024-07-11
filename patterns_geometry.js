function drawDot(x, y, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, 2, 0, 2 * Math.PI);
    ctx.fill();
}
function drawRect(x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
}
function drawCircle(x, y, radius, color) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.stroke();

}
function line(x1, y1, x2, y2, color) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}
function text(x, y, text, color) {
    ctx.fillStyle = color;
    ctx.font = "12px Arial";
    ctx.fillText(text, x, y);
}
function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function background(color) {
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}


x += dx * dt;
y += dy * dt;

x = speed * Math.cos(angle);
y = speed * Math.sin(angle);

x = Math.cos(angle) * distance;
y = Math.sin(angle) * distance;

distance = Math.sqrt(x ** 2 + y ** 2);
angle = Math.atan2(y, x);

nextMovement = {
    x: Math.cos(angle) * speed,
    y: Math.sin(angle) * speed
}
speed += acceleration * dt;
