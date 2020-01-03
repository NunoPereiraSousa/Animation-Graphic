import Ball from "../Bouncing Balls/Ball.js";

const canvas = document.querySelector('#myCanvas');
const context = canvas.getContext("2d");

const W = canvas.width;
const H = canvas.height;

let balls = []

showBalls()
function showBalls() {
    for (let i = 0; i < 50; i++) {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        let color = `rgb(${r}, ${g}, ${b})`;
        let direction = Math.random() * 2 * Math.PI;
        let radius =  Math.floor(Math.random() * 9) + 12;
        let x = radius + Math.random() * (W - 2 * radius)
        let y = radius + Math.random() * (H - 2 * radius)
        balls.push(new Ball(x, y, radius, direction, color, context, W, H))
    }
}

function render() {
    // context.clearRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = "rgba(255,255,255,0.25)"
    context.fillRect(0, 0, W, H);
    
    balls.forEach(ball => {
        ball.draw()
        ball.update()
    });

    window.requestAnimationFrame(render)
}
render()