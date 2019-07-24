const planeImg1 = new Image();
planeImg1.src = "./assets/spritesheet.png";

const planeImg2 = new Image();
planeImg2.src = "./assets/Fly (2).png";

class Plane {
  constructor() {
    this.animation = [
      {sX: 480, sY: 1109},
      {sX: 933, sY: 1109}
    ];
    this.w = 443;
    this.h = 302;
    this.x = 0;
    this.y = 0;

    this.frame = 1;
  }

  draw(ctx) {
    let plane = this.animation[this.frame];

    planeImg1.onload = () => {
      ctx.drawImage(planeImg1, plane.sX, plane.sY, this.w, this.h, this.x, this.y, this.w / 2, this.h / 2)
    }
  }
}

export default Plane;