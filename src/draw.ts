import { canvas } from "./canvas-init";
import { displayCursorCoords, displayZoomLevel } from "./appParams";
import { app } from "./canvas-init";

export function reDraw() {
    const context = canvas.getContext('2d');

    context.clearRect(0, 0, canvas.width, canvas.height);

    app.drawenObjects.forEach(object => {
        object.draw();
    });

    if (app.preDrawenObject?.getIsStartCoordSet()) app.preDrawenObject.preDraw();  
    displayCursorCoords();
    displayZoomLevel();  
    
    window.requestAnimationFrame(reDraw);
}




