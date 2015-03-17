c = document.getElementById('canvas');
ctx = c.getContext("2d");
var image = new Image();
image.src = "images/logo.png";
var speed = 50;

function drawBox(bx, by) {
    ctx.beginPath();
    ctx.drawImage(image, bx, by);
    ctx.stroke();
    ctx.closePath();
}

var x = 300;
var y = 110;

function moveMe() {
    ctx.clearRect(0, 0, c.width, c.height);
    drawBox(x, y);
    if (x + image.width / 8 >= c.width / 8) {
        x -= 3;
    } else {
        if(y + image.height / 2 > c.height / 2) {
            y--;
        }
    }


}

setInterval(moveMe, speed);