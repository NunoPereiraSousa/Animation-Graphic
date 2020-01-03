export default class Ball {
    constructor(x, y, radius, direction, color, context, W, H) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.vx = Math.floor(Math.random() * 10) * Math.cos(direction);
        this.vy = Math.floor(Math.random() * 10) * Math.sin(direction);
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
        if (this.x - this.radius < 0 || this.x + this.radius > this.W) {
            this.vx = -this.vx
        }

        if (this.y - this.radius < 0 || this.y + this.radius > this.H) {
            this.vy = -this.vy
        }

        this.x += this.vx
        this.y += this.vy
    }
}