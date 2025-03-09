import { Circle } from "./circle/Circle";
import { Rect } from "./rect/Rect";
import { Line } from "./line/Line";
import { Text } from "./text/Text";
import { ShapeName } from "./Shape";
import { app } from "./canvas-init";

export const radiusInput: HTMLInputElement = document.querySelector('.r_value');
export const widthInput: HTMLInputElement = document.querySelector('.w_value');
export const heightInput: HTMLInputElement = document.querySelector('.h_value');
export const angleInput: HTMLInputElement = document.querySelector('.a_value');
export const textInput: HTMLInputElement = document.querySelector('.t_value');

radiusInput.addEventListener('change', () => {
    if (app.preDrawenObject.name !== ShapeName.CIRCLE) return;

    const currentDrawenObject = app.preDrawenObject as Circle;
    
    currentDrawenObject.inputRadius(+radiusInput.value);
});

widthInput.addEventListener('change', () => {
    if (app.preDrawenObject.name === ShapeName.CIRCLE) return;

    const currentDrawenObject = app.preDrawenObject as Rect | Line;

    currentDrawenObject.inputWidth(+widthInput.value);

});

heightInput.addEventListener('change', () => {
    if (app.preDrawenObject.name !== ShapeName.RECT) return;

    const currentDrawenObject = app.preDrawenObject as Rect;

    currentDrawenObject.inputHeight(+heightInput.value);
})

angleInput.addEventListener('change', () => {
    if (app.preDrawenObject.name !== ShapeName.LINE) return;

    const currentDrawenObject = app.preDrawenObject as Line;

    currentDrawenObject.inputAngle(+angleInput.value);
})

textInput.addEventListener('change', () => {
    if (app.preDrawenObject.name !== ShapeName.TEXT) return;

    const currentDrawenObject = app.preDrawenObject as Text;

    currentDrawenObject.inputContent(textInput.value);
})