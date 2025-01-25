import { canvas } from "./canvas-init";

export function drawRect(xStart: number, yStart: number, xEnd: number, yEnd: number) {
    const context = canvas.getContext('2d');

    const width = xEnd - xStart;
    const height = yEnd - yStart;

    context.rect(xStart, yStart, width, height);
    context.stroke();
}