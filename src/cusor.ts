import { cursorCoords } from "./canvas-state";

const xField = document.querySelector('.x_value');
const yField = document.querySelector('.y_value');

function displayCoords() {
    xField.textContent = String(cursorCoords.x);
    yField.textContent = String(cursorCoords.y);
}

export function setCoords(x: number, y: number) {
    cursorCoords.x = x;
    cursorCoords.y = y;

    displayCoords();
}