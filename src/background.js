import Sprite from "./sprite";

const skyImg = new Image();
skyImg.src = "./assets/sprite.png"

class Background {
  constructor(canvas) {
    this.sX = 0;
    this.sY = 0;
    this.w = 275;
    this.h = 226;
    this.x = 0;
    this.y = canvas.height - 226;
  }

  draw(ctx) {
    console.log(skyImg);
    // console.log(this.y)
    ctx.drawImage(skyImg, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h)
  }
}

export default Background;