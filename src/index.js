import Game from "./game";

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext('2d');
  canvas.height = 480;
  canvas.width = 320;
  let game = new Game(canvas, ctx);
  // document.getElementById("how").innerHTML = `Use directional arrows or WASD to move your car around. Collect as much cash as you can to increase your points while avoiding the rocks!`;

  // document.getElementById("play-btn").addEventListener("click", () => {

  //   if (game.gameOver === true) {
  //     game.cleanUp();
  //     game = new Game(canvas, ctx);
  //   }

  //   setupControlListeners(game);

  //   game.start();
  // })
  console.log(game);
  game.loop();
});
