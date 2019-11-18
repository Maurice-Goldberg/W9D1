export default class Bird {
  constructor(dimensions) {
    this.velocity = 0;
    this.dimensions = dimensions;
    this.x = Math.floor(dimensions.width / 3);
    this.y = Math.floor(dimensions.height / 2);
    this.gravity = 0.5;
  }

  drawBird(ctx) {
    let grd = ctx.createLinearGradient(this.x, this.y, this.x + 40, this.y + 30);
    grd.addColorStop(0, "red");
    grd.addColorStop(1, "darkblue");
    ctx.fillStyle = grd;
    ctx.fillRect(this.x, this.y, 40, 30);
  }

  animate(ctx) {
    this.move();
    this.drawBird(ctx);
  }

  move() {
    this.y += this.velocity;
    this.velocity += this.gravity;
  }

  flap() {
    this.velocity = -6;
  }
}