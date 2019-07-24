// import { log } from "util";

import Background from './background'
import Plane from './plane'

const sprite = new Image();
sprite.src = "./assets/spritesheet.png"

class Game {
  constructor(canvas, context) {
    this.canvas = canvas;
    this.ctx = context;
    this.frames = 0;
    this.bg = new Background(this.canvas, this.ctx);
    this.plane = new Plane();
  }

  draw() {
    this.ctx.fillStyle = "#5DDEF9";
    this.ctx.fillRect(0,0, canvas.width, canvas.height);
    this.bg.draw(this.ctx);
    this.plane.draw(this.ctx)
  }

  update() {

  }

  loop() {
    this.update();
    this.draw();
    this.frames++;

    requestAnimationFrame(this.loop);
  }
}

export default Game;