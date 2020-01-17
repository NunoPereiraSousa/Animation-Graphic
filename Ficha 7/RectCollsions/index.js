const canvas = document.querySelector('#myCanvas');
const context = canvas.getContext("2d");

const w = canvas.width;
const h = canvas.height;

let x1 = 50
let x2 = 300
let y = h / 2
let y2 = h / 2
let rectW = 100
let rectH = 50
let vel = 2
let vel2 = 2

function render() {
    context.clearRect(0, 0, w, h);

    context.fillStyle = 'red';
    context.fillRect(x1, y, rectW, rectH);
    context.fill();

    context.fillStyle = 'green';
    context.fillRect(x2, y2, rectW, rectH);
    context.fill();

    if (x1 + rectW < x2 ||
        x1 > x2 + rectW ||
        y + rectH < y2 ||
        y > y2 + rectH) {
        x1 += vel
        x2 += vel2;
    } else {
        context.fillStyle = 'yellow';
        context.fillRect(x1, y, rectW, rectH);
        context.fill();

        context.fillStyle = 'orange';
        context.fillRect(x2, y2, rectW, rectH);
        context.fill();

        x1 += vel
        x2 += vel2;
    }

    if (x1 > w - rectW || x1 < 0) {
        vel = -vel
    }

    if (x2 > w - rectW || x2 < 0) {
        vel2 = -vel2
    }



    window.requestAnimationFrame(render)
}

render()