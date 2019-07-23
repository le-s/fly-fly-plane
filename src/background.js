import Sprite from "./sprite";

const skyImg = new Image();
skyImg.src = "./assets/sprite.png"

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

  draw() {
    console.log(skyImg);
    // console.log(this.y)
    console.log(this.ctx);
    this.ctx.drawImage(skyImg, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h)
  }
}

export default Background;