import { App } from "./App";
import { clickHandler, mouseDownHandler, mouseUpHandler, moveHandlerThrottled } from "./canvasEvenHandler";
import { reDraw } from "./draw";
import { Grid } from "./grid/Grid";

const workPlace = document.querySelector('.work-place');
export const canvas: HTMLCanvasElement = document.getElementById('canvas') as HTMLCanvasElement;

export let app: App;

export function init() {
    const width = parseInt(getComputedStyle(workPlace).width);
    const height = parseInt(getComputedStyle(workPlace).height);

    canvas.setAttribute('width', String(width));
    canvas.setAttribute('height', String(height));

    canvas.addEventListener('click', clickHandler);

    canvas.addEventListener('mousedown', mouseDownHandler);
    canvas.addEventListener('mousemove', moveHandlerThrottled);
    canvas.addEventListener('mouseup', mouseUpHandler);

    app = new App();

    const grid = new Grid(10, 10, 700, 500);

    app.drawenObjects.push(grid);

    window.requestAnimationFrame(reDraw);
}