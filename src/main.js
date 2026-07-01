import './style.css'
import { getCanvas, getContext, initCanvas } from './core/canvas'
import { initInput } from './systems/input';
import { startGameLoop } from './core/gameLoop';
import { initScene } from './gameScenes/gameStart';

let canvas, ctx;

function init() {
  initCanvas();

  canvas = getCanvas();
  ctx = getContext();

  initInput();
  startGameLoop();

  console.log("Game Started!")
}

window.onload = async () => {
  await initScene();

  init();
}