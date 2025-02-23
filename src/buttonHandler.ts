import { currentZoom, preDrawenObject } from "./canvas-state";
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

const buttons = document.querySelectorAll<HTMLButtonElement>('.shap');
const scaleIncrees = document.querySelector<HTMLButtonElement>('.scale_inc');
const scaleDecrees = document.querySelector<HTMLButtonElement>('.scale_dec');

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
                Circle.create(CircleCanvasAdapter);
                break;
            }
            case ShapeName.LINE: {
                Line.create(LineCanvasAdapter);
                break;
            }
            case ShapeName.RECT: {
                Rect.create(RectCanvasAdapter);
                break;
            }
            case ShapeName.TEXT: {
                Text.create(TextCanvasAdapter);
                break;
            }
        }

        if (currentButtonShape === preDrawenObject.object.name) {

            button.style.outline = '2px solid red'
        }
    })
});

scaleIncrees.addEventListener('click', () => {
    currentZoom.value += 0.1;
});

scaleDecrees.addEventListener('click', () => {
    currentZoom.value -= 0.1;
});

canvas.addEventListener('wheel', event => {
    if (event.deltaY < 0) {
        currentZoom.value += 0.1;
    }
    else {
        currentZoom.value -= 0.1;
    }
})