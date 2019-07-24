import Sprite from "./sprite";

const skyImg = new Image();
skyImg.src = "./assets/BG.png"

class Background {
  constructor() {
    this.sX = 0;
    this.sY = 0;
    this.w = 1460;
    this.h = 1095;
    this.x = 0;
    this.y = 0;
  }

  draw(ctx) {
    skyImg.onload = () => {
      ctx.drawImage(skyImg, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w/2, this.h/2)
    }
  }
}

export default Background;