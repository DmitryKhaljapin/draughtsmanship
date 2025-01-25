import { canvas } from "./canvas-init";

export function drawLine(xStart: number, yStart: number, xEnd: number, yEnd: number): void  {
    const context = canvas.getContext('2d');

    context.beginPath();

    context.moveTo(xStart, yStart);
    context.lineTo(xEnd, yEnd);

    context.stroke();
}