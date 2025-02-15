import { preDrawenObject } from "./canvas-state";
import { setCoords } from "./cusor";
import { throttle } from "./throttle";

export function clickHandler(event: MouseEvent) {
    const canvas = event.target as HTMLCanvasElement;

    if (preDrawenObject.object === null) return;

    const canvasRect = canvas.getBoundingClientRect();

    const x = event.clientX - canvasRect.x;
    const y = event.clientY - canvasRect.y;
    
    preDrawenObject.object.clickHandler({x, y});
  
}

function moveHandler(event: MouseEvent) {
    const canvas = event.target as HTMLCanvasElement;

    const canvasRect = canvas.getBoundingClientRect();

    const x = event.clientX - canvasRect.x;
    const y = event.clientY - canvasRect.y;

    setCoords(x, y);

    if (!preDrawenObject.object) return;

    preDrawenObject.object.moveHandler({x, y});
}

export const moveHandlerThrottled = throttle(moveHandler, 17);