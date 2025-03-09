import { throttle } from "./throttle";
import { app } from "./canvas-init";
import { getCanvasCoords } from "./utils/getCanvasCoords";

export function clickHandler(event: MouseEvent) {    
    app.clickHandler(getCanvasCoords(event));
}

function moveHandler(event: MouseEvent) {
    app.moveHandler(getCanvasCoords(event));
}

export const moveHandlerThrottled = throttle(moveHandler, 17);

export function mouseDownHandler(event: MouseEvent) {
    app.mouseDownHandler(getCanvasCoords(event));
}

export function mouseUpHandler() {
    app.mouseUpHandler();
}