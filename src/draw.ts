import { canvas } from "./canvas-init";
import { drawenObjects, preDrawenObject } from "./canvas-state";
import { drawState, Shape } from "./draw-state";
import { drawCircle, preDrawCircle } from "./drawCircle";
import { drawLine, preDrawLine } from "./drawLine";
import { drawRect, preDrawRect } from "./drawRect";

function drawObject(xStart: number, yStart: number, xEnd: number, yEnd: number, shape: Shape ) {
    switch (shape) {
        case Shape.LINE: {
            drawLine(xStart, yStart, xEnd, yEnd);

            break;
        }
        case Shape.CIRCLE: {
            drawCircle(xStart, yStart, xEnd, yEnd);

            break;
        }
        case Shape.RECT: {
            drawRect(xStart, yStart, xEnd, yEnd);
            
            break;
        }
    } 
}

function preDraw(x: number, y: number) {
    switch (drawState.shape) {
        case Shape.LINE: {
            preDrawLine(drawState.startCoords.x, drawState.startCoords.y, x, y);

            break;
        }
        case Shape.CIRCLE: {
            preDrawCircle(drawState.startCoords.x, drawState.startCoords.y, x, y);

            break;
        }
        case Shape.RECT: {
            preDrawRect(drawState.startCoords.x, drawState.startCoords.y, x, y);
            
            break;
        }
    } 
}

export function reDraw() {
    const context = canvas.getContext('2d');

    context.clearRect(0, 0, canvas.width, canvas.height);

    drawenObjects.forEach(object => {
        drawObject(object.startCoords.x, object.startCoords.y, object.endCoords.x, object.endCoords.y, object.shape);
    });

    if (preDrawenObject.object !== null) preDraw(preDrawenObject.object.endCoords.x, preDrawenObject.object.endCoords.y);    

    window.requestAnimationFrame(reDraw);
}




