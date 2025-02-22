import { preDrawenObject } from "./canvas-state";
import { Circle } from "./circle/Circle";
import { Rect } from "./rect/Rect";
import { Line } from "./line/Line";
import { Text } from "./text/Text";
import { ShapeName } from "./Shape";
import { canvas } from "./canvas-init";
import { LineCanvasAdapter } from "./line/adapter";
import { CircleCanvasAdapter } from "./circle/adapter";
import { RectCanvasAdapter } from "./rect/adapter";
import { TextCanvasAdapter } from "./text/adapter";

const buttons = document.querySelectorAll<HTMLButtonElement>('button');

buttons.forEach(button => {
    button.addEventListener('click', event => {
        const currentButton = event.target as HTMLButtonElement;
        const currentButtonShape = currentButton.dataset.shape as ShapeName;

        buttons.forEach(button => button.style.outline = null);

        if (currentButtonShape === preDrawenObject.object?.name) {
            preDrawenObject.object = null;
            return;
        }
        
        switch (currentButtonShape) {
            case ShapeName.CIRCLE: {
                preDrawenObject.object = new Circle(CircleCanvasAdapter);
                break;
            }
            case ShapeName.LINE: {
                preDrawenObject.object = new Line(LineCanvasAdapter);
                break;
            }
            case ShapeName.RECT: {
                preDrawenObject.object = new Rect(RectCanvasAdapter);
                break;
            }
            case ShapeName.TEXT: {
                preDrawenObject.object = new Text(TextCanvasAdapter);
                break;
            }
        }

        if (currentButtonShape === preDrawenObject.object.name) {

            button.style.outline = '2px solid red'
        }
    })
});

// scaleIncrees.addEventListener('click', () => {
//     currentZoom.value += 0.1;
// });

// scaleDecrees.addEventListener('click', () => {
//     currentZoom.value -= 0.1;
// });

// canvas.addEventListener('wheel', event => {
//     if (event.deltaY < 0) {
//         currentZoom.value += 0.1;
//     }
//     else {
//         currentZoom.value -= 0.1;
//     }
// })