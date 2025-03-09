import { app } from "./canvas-init";

const xField = document.querySelector('.x_value');
const yField = document.querySelector('.y_value');

const zoomField = document.querySelector('.zoom_value');

export function displayCursorCoords() {
    xField.textContent = app.cursorCoords.x?.toFixed(2);
    yField.textContent = app.cursorCoords.y?.toFixed(2);
}

export function displayZoomLevel() {
    zoomField.textContent = app.currentZoomLevel.toFixed(1);
}