class Background {
  constructor(canvas, ctx) {
    this.sX = 0;
    this.sY = 0;
    this.w = 275;
    this.h = 226;
    this.x = 0;
    this.y = canvas.height - 226;
    this.ctx = ctx;
  }
}

export default Background;