import { canvas } from "./canvas-init";

export function addText(xStart: number, yStart: number, text: string) {
    const context = canvas.getContext('2d');

    const lineHeight = 20;
    
    context.font = `${lineHeight}px Arial`;

    context.textBaseline = 'top';

    context.fillText(text, xStart, yStart);
}