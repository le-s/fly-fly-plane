import Background from './background'

const sprite = new Image();
// sprite.src = "./assets/spritesheet.png"
sprite.src = "./assets/sprite.png"

class Game {
  constructor(canvas, context) {
    this.canvas = canvas;
    this.ctx = context;
    this.frames = 0;
    this.bg = new Background(this.canvas, this.ctx);
  }

  draw() {
    this.ctx.fillStyle = "#5DDEF9";
    this.ctx.fillRect(0,0, canvas.width, canvas.height);

    this.bg.draw();
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