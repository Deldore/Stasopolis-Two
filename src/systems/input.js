const keysMap = {
    w: "ArrowUp",
    s: "ArrowDown",
    a: "ArrowLeft",
    d: "ArrowRight",
    ArrowUp: "ArrowUp",
    ArrowDown: "ArrowDown",
    ArrowLeft: "ArrowLeft",
    ArrowRight: "ArrowRight",
    z: "z",
    x: "x",
    Enter: "Enter",
    Escape: "Escape",
}

export const keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false,
    z: false,
    x: false,
    Enter: false,
    Escape: false,
};

export const onePressKeys = {
    z: false,
    x: false,
    Enter: false,
};

export function initInput() {
    window.addEventListener('keydown', (e) => {
        const key = e.key;
        if (key in keysMap) {
            keys[keysMap[key]] = true;
            e.preventDefault();

            // Для однократных нажатий
            if (key in onePressKeys && !onePressKeys[key]) {
                onePressKeys[key] = true;
            }
        }
    });

    window.addEventListener('keyup', (e) => {
        const key = e.key;
        if (key in keys) {
            keys[key] = false;
            e.preventDefault();
        }
    });
}

// Сброс однократных нажатий (вызывать каждый кадр)
export function resetOnePressKeys() {
    for (const key in onePressKeys) {
        onePressKeys[key] = false;
    }
}

// Проверка, зажат ли ключ
export function isKeyDown(key) {
    return keys[key] || false;
}

// Проверка однократного нажатия
export function wasKeyPressed(key) {
    return onePressKeys[key] || false;
}