import Ball from "../FallingBallsStop/Ball.js";

const canvas = document.querySelector('#myCanvas');
const context = canvas.getContext("2d");

const W = canvas.width;
const H = canvas.height;

let balls = [];

ballsInstantiation()

function ballsInstantiation() {
    for (let i = 0; i < 5; i++) {
        let color = ballsColors();
        let radius = Math.floor(Math.random() * 9) + 15;
        let x = radius + Math.random() * (W - 2 * radius);
        let y = -radius;
        let vY = Math.floor(Math.random() * 3) + 5;
        balls.push(new Ball(x, y, color, radius, vY, context, W, H, stop))
    }
}

function render() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    balls.forEach(ball => {
        ball.draw()
    });

    balls[balls.length - 1].update()
    if (balls[balls.length - 1].stop) {
        ballsInstantiation()
    }

    window.requestAnimationFrame(render)
}
render()

function ballsColors() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}