import { canvas } from "./canvas-init";

export function drawCircle(xStart: number, yStart: number, xEnd: number, yEnd: number) {
    const context = canvas.getContext('2d');

    const radius = Math.sqrt((xEnd - xStart)**2 + (yEnd - yStart)**2);

    context.beginPath();

    context.arc(xStart, yStart, radius, 0, 2 * Math.PI);

    context.stroke();
}