import { canvas } from "../canvas-init";
import { Coords, IAdapter } from "../Shape";
import { Text } from "./Text";

interface ICanvasText extends IAdapter {
    startCoords: Coords;
    content: string;
}

export class TextCanvasAdapter implements ICanvasText {
    startCoords: Coords;
    content: string;

    constructor(text: Text) {
        this.startCoords = {x: text.xStart, y: text.yStart};
        this.content = text.content;
    }

    draw(lineWidth: number) {
    const context = canvas.getContext('2d');

    const lineHeight = 20;
    
    context.fillStyle = `rgba(0, 0, 0, ${lineWidth})`;
    
    context.font = `${lineHeight}px Arial`;

    context.textBaseline = 'top';

    context.fillText(this.content, this.startCoords.x, this.startCoords.y);
    }
}