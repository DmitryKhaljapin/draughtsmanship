import { drawenObjects, preDrawenObject } from "./canvas-state";
import { drawState } from "./draw-state";
import { throttle } from "./throttle";

export function clickHandler(event: MouseEvent) {
    const canvas = event.target as HTMLCanvasElement;

    if (drawState.shape === null) return;

    const canvasRect = canvas.getBoundingClientRect();

    const x = event.clientX - canvasRect.x;
    const y = event.clientY - canvasRect.y;

    if (drawState.startCoords === null) {
       drawState.setStartCoords(x, y);
    }

    else {
        drawState.setEndCoords(x, y);

        drawenObjects.push({
            startCoords: {
                x: drawState.startCoords.x,
                y: drawState.startCoords.y,
            },
            endCoords: {
                x: drawState.endCoords.x,
                y: drawState.endCoords.y,
            },
            shape: drawState.shape
        });

        preDrawenObject.object = null;
        drawState.resetCoords();
    }
}

function moveHandler(event: MouseEvent) {
    if (drawState.endCoords !== null || drawState.startCoords === null) return;

    const canvas = event.target as HTMLCanvasElement;

    const canvasRect = canvas.getBoundingClientRect();

    const x = event.clientX - canvasRect.x;
    const y = event.clientY - canvasRect.y;

    preDrawenObject.object = {
        startCoords: {
            x: drawState.startCoords.x,
            y: drawState.startCoords.y,
        },
        endCoords: {
            x,
            y,
        },
        shape: drawState.shape
    }
}

export const moveHandlerThrottled = throttle(moveHandler, 17);