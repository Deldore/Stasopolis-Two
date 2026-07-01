export const gameState = {
  frame: 0,
  isRunning: true,
  isPaused: false,
  currentScene: 'menu', // 'menu', 'battle', 'dialogue', 'gameover'
  score: 0,
  playerHealth: 20,
  maxHealth: 20,
  karma: 0,
};

const observers = [];

export function subscribeToState(callback) {
  observers.push(callback);
}

export function updateState(newState) {
  Object.assign(gameState, newState);
  observers.forEach(cb => cb(gameState));
}

export function getState() {
  return { ...gameState };
}