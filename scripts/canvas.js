c = document.getElementById('myCanvas');
ctx = c.getContext("2d");

function drawBox(bx, by) {
    ctx.beginPath();
    ctx.rect(bx, by, 60, 60);
    ctx.lineWidth = "4";
    ctx.strokeStyle = "#40A";
    ctx.stroke();
    ctx.closePath();
}

var x = 50;
var y = 50;

function moveMe() {

    ctx.clearRect(0, 0, c.width, c.height);
    drawBox(x, y);
    x += 1;


}

setInterval(moveMe, 100);