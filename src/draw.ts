import { canvas } from "./canvas-init";
import { drawenObjects, preDrawenObject } from "./canvas-state";

export function reDraw() {
    const context = canvas.getContext('2d');

    context.clearRect(0, 0, canvas.width, canvas.height);

    drawenObjects.forEach(object => {
        object.draw();
    });

    if (preDrawenObject.object?.getIsStartCoordSet()) preDrawenObject.object.preDraw();    
    
    window.requestAnimationFrame(reDraw);
}




