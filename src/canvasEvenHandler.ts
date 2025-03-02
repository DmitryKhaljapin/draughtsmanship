import { drag, preDrawenObject } from "./canvas-state";
import { setCoords } from "./cusor";
import { throttle } from "./throttle";

export function clickHandler(event: MouseEvent) {
    const canvas = event.target as HTMLCanvasElement;

    if (drag.draggingMode) {
        return;
    }
    else {
        if (preDrawenObject.object === null) return;

        const canvasRect = canvas.getBoundingClientRect();
    
        const x = event.clientX - canvasRect.x;
        const y = event.clientY - canvasRect.y;
        
        preDrawenObject.object.clickHandler({x, y});
    }
}

function moveHandler(event: MouseEvent) {
    const canvas = event.target as HTMLCanvasElement;

    const canvasRect = canvas.getBoundingClientRect();

    const x = event.clientX - canvasRect.x;
    const y = event.clientY - canvasRect.y;

    if (drag.isDragging) {
        const newOffset = {
            x: drag.startCoords.x - event.clientX,
            y: drag.startCoords.y - event.clientY
        }

        drag.currentOffset.x = drag.prevOffset.x + newOffset.x;
        drag.currentOffset.y = drag.prevOffset.y + newOffset.y;
    }
    else {
        setCoords(x, y);

        if (!preDrawenObject.object) return;

        preDrawenObject.object.moveHandler({x, y});
    }

}

export const moveHandlerThrottled = throttle(moveHandler, 17);

export function mouseDownHandler(event: MouseEvent) {
    if (!drag.draggingMode) return;
    drag.isDragging = true;
    drag.startCoords.x = event.clientX;
    drag.startCoords.y = event.clientY;

    drag.prevOffset.x = drag.currentOffset.x;
    drag.prevOffset.y = drag.currentOffset.y;
}

export function mouseUpHandler() {
    if (!drag.draggingMode) return;
    drag.isDragging = false;
}