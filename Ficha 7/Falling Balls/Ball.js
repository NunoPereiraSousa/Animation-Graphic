export default class Ball {
    constructor(x, y, color, radius, vY, context, W, H) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.radius = radius;
        this.vY = vY
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
        if (this.y >= this.H + this.radius * 2) {
            this.y = -this.radius
        }
        this.y += this.vY
    }
}