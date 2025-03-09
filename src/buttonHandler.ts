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
import { app } from "./canvas-init";
import { AppStateNames, Dragging, Drawing, InitialState } from "./AppState";

const buttons = document.querySelectorAll<HTMLButtonElement>('.shap');
const scaleIncrees = document.querySelector<HTMLButtonElement>('.scale_inc');
const scaleDecrees = document.querySelector<HTMLButtonElement>('.scale_dec');
const dragButton = document.querySelector<HTMLButtonElement>('.drag');

const workPlace = document.querySelector('.work-place');

buttons.forEach(button => {
    button.addEventListener('click', event => {
        const currentButton = event.target as HTMLButtonElement;
        const currentButtonShape = currentButton.dataset.shape as ShapeName;

        buttons.forEach(button => button.style.outline = null);

        if (currentButtonShape === app.preDrawenObject?.name) {
            app.preDrawenObject = null;
            app.setState(new InitialState())

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

        app.setState(new Drawing())

        if (currentButtonShape === app.preDrawenObject.name) {

            button.style.outline = '2px solid red'
        }
    })
});

scaleIncrees.addEventListener('click', () => {
    app.currentZoomLevel += 0.1;
});

scaleDecrees.addEventListener('click', () => {
    app.currentZoomLevel -= 0.1;
});

canvas.addEventListener('wheel', event => {
    if (event.deltaY < 0) {
        app.currentZoomLevel += 0.1;
    }
    else {
        app.currentZoomLevel -= 0.1;
    }
})

dragButton.addEventListener('click', () => {
    if (app.state.name === AppStateNames.Dragging) {
        dragButton.style.outline = 'none';
        workPlace.classList.remove('dragging');

        app.setState(new InitialState());
    } 
    else {
        dragButton.style.outline = '2px solid red'
        workPlace.classList.add('dragging');

        app.setState(new Dragging())
    } 
})