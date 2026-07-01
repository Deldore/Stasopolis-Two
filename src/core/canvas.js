export const GAME_WIDTH = 800;
export const GAME_HEIGHT = 600;

let canvas, ctx;

export function initCanvas() {
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');
  
  canvas.width = GAME_WIDTH;
  canvas.height = GAME_HEIGHT;
  
  return { canvas, ctx };
}

export function getCanvas() {
  if (!canvas) throw new Error('Canvas not initialized');
  return canvas;
}

export function getContext() {
  if (!ctx) throw new Error('Context not initialized');
  return ctx;
}
