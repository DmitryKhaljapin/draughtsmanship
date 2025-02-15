import { preDrawenObject } from "./canvas-state";
import { Circle } from "./circle/Circle";
import { Rect } from "./rect/Rect";
import { Line } from "./line/Line";
import { ShapeName } from "./Shape";

const buttons = document.querySelectorAll('button')

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
                preDrawenObject.object = new Circle();
                break;
            }
            case ShapeName.LINE: {
                preDrawenObject.object = new Line();
                break;
            }
            case ShapeName.RECT: {
                preDrawenObject.object = new Rect();
                break;
            }
        }

        if (currentButtonShape === preDrawenObject.object.name) {

            button.style.outline = '2px solid red'
        }
    })
})