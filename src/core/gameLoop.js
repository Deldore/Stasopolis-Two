import { resetOnePressKeys } from "../systems/input";
import { gameState } from "./state";

let lastTime = 0;
let frameCount = 0;

export function startGameLoop() {
    requestAnimationFrame(gameLoop);
}

function gameLoop(timestamp) {
    if (!gameState.isRunning) return;

    const deltaTime = timestamp - lastTime;
    lastTime = timestamp;
    
    resetOnePressKeys();

    frameCount++;

    requestAnimationFrame(gameLoop);
}