import Particle from "../Particle System/Particle.js";

const canvas = document.querySelector('#myCanvas');
const context = canvas.getContext("2d");

const W = canvas.width;
const H = canvas.height;

let particles = [];

createParticles()

function createParticles() {
    for (let i = 0; i < 5; i++) {
        let color = "#fff";
        let radius = 5;
        let x = W / 2;
        let y = H / 4;
        let vX = -3 + Math.random() * 6;
        let vY = -2 + Math.random() * 4;
        let gravity = 0.1;
        particles.push(new Particle(x, y, color, radius, vX, vY, gravity, context, W, H))
    }
}

function render() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(particle => {
        particle.draw()
        particle.update()        
    });

    window.requestAnimationFrame(render)
}
render()