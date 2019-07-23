class Game {
  constructor(canvas, context) {
    this.canvas = canvas;
    this.ctx = context;
    this.frames = 0;
  }

  draw() {
    this.ctx.fillStyle = "#5DDEF9";
    this.ctx.fillRect(0,0, canvas.width, canvas.height);
  }

  update() {

  }

  loop() {
    this.update();
    this.draw();
    this.frames++;

    requestAnimationFrame(loop);
  }
}

export default Game;