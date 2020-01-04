export default class Particle {
    constructor(x, y, color, vX, vY, gravity, context, W, H) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.vX = vX;
        this.vX = vY;
        this.gravity = gravity;
        this.context = context;
        this.W = W;
        this.H = H;
    }

    draw() {
        this.context.fillStyle = this.color;
        this.context.beginPath();
        this.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        this.context.fill();
    }

    update() {
        this.x += this.vX
        this.y += this.vY
        this.vY += this.gravity
    }

    destroyed() {
        if (this.y + this.radius * 2 >= this.H) {
            for (let i = 0; i < particles.length; i++) {
                particles.slice(i, 1)
            }
        }
    }
}