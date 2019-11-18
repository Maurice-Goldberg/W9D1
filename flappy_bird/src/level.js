export default class Level {
  constructor(dimensions) {
    this.dimensions = dimensions;
  }

  animate(ctx) {
    this.drawBackground(ctx);
  }

  drawBackground(ctx) {
    let grd = ctx.createLinearGradient(0, 0, this.dimensions.width, this.dimensions.height);
    grd.addColorStop(0, "deeppink");
    grd.addColorStop(1, "darkorchid");
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
  }
}