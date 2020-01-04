import Ball from "../BallsCollisions/Ball.js";

const canvas = document.querySelector('#myCanvas');
const context = canvas.getContext("2d");

const W = canvas.width;
const H = canvas.height;

let balls = [];

createBalls()

function createBalls() {
    for (let i = 0; i < 50; i++) {
        let color = "blue";
        let direction = Math.random() * 2 * Math.PI;
        let vel = Math.random() * 5;
        let vx = vel * Math.cos(direction);
        let vy = vel * Math.sin(direction);
        let radius = Math.floor(Math.random() * 9) + 12;
        let x = radius + Math.random() * (W - 2 * radius)
        let y = radius + Math.random() * (H - 2 * radius)
        balls.push(new Ball(x, y, radius, direction, vx, vy, color, context, W, H))
    }
}

function ballsCollisions(a, b) {
    let dx = a.x - b.x;
    let dy = a.y - b.y;
    let D = Math.sqrt(dx * dx + dy * dy);

    if (D < (a.radius + b.radius)) {
        a.color = "red"
        b.color = "red"
    }
}

function render() {
    context.clearRect(0, 0, W, H);

    balls.forEach(ball => {
        ball.draw();
        ball.update();
    });

    balls.forEach(ball => {
        ball.color = "blue"
    });

    for (let i = 0; i < balls.length; i++) {
        for (let j = i + 1; j < balls.length; j++) {
            ballsCollisions(balls[i], balls[j])
        }
    }

    window.requestAnimationFrame(render)
}
render()