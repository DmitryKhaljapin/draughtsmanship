import { preDrawenObject } from "./canvas-state";
import { Circle } from "./circle/Circle";
import { Rect } from "./rect/Rect";
import { Line } from "./line/Line";
import { Text } from "./text/Text";
import { ShapeName } from "./Shape";

export const radiusInput: HTMLInputElement = document.querySelector('.r_value');
export const widthInput: HTMLInputElement = document.querySelector('.w_value');
export const heightInput: HTMLInputElement = document.querySelector('.h_value');
export const angleInput: HTMLInputElement = document.querySelector('.a_value');
export const textInput: HTMLInputElement = document.querySelector('.t_value');

radiusInput.addEventListener('change', () => {
    if (preDrawenObject.object.name !== ShapeName.CIRCLE) return;

    const currentDrawenObject = preDrawenObject.object as Circle;
    
    currentDrawenObject.inputRadius(+radiusInput.value);
});

widthInput.addEventListener('change', () => {
    if (preDrawenObject.object.name === ShapeName.CIRCLE) return;

    const currentDrawenObject = preDrawenObject.object as Rect | Line;

    currentDrawenObject.inputWidth(+widthInput.value);

});

heightInput.addEventListener('change', () => {
    if (preDrawenObject.object.name !== ShapeName.RECT) return;

    const currentDrawenObject = preDrawenObject.object as Rect;

    currentDrawenObject.inputHeight(+heightInput.value);
})

angleInput.addEventListener('change', () => {
    if (preDrawenObject.object.name !== ShapeName.LINE) return;

    const currentDrawenObject = preDrawenObject.object as Line;

    currentDrawenObject.inputAngle(+angleInput.value);
})

textInput.addEventListener('change', () => {
    if (preDrawenObject.object.name !== ShapeName.TEXT) return;

    const currentDrawenObject = preDrawenObject.object as Text;

    currentDrawenObject.inputContent(textInput.value);
})