import { canvas } from "../canvas-init";
import { Coords, IAdapter } from "../Shape";
import { TextProxy } from "./proxy";
import { Text } from "./Text";

interface ICanvasText extends IAdapter {
    startCoords: Coords;
    content: string;
}

export class TextCanvasAdapter implements ICanvasText {
    public startCoords: Coords;
    public content: string;
    public lineHeight: number;

    constructor(text: Text) {
        const proxyedText = new TextProxy(text);

        this.startCoords = {x: proxyedText.xStart, y: proxyedText.yStart};
        this.content = proxyedText.content;
        this.lineHeight = proxyedText.lineHeight;
    }

    draw(lineWidth: number) {
    const context = canvas.getContext('2d');
    
    context.fillStyle = `rgba(0, 0, 0, ${lineWidth})`;
    
    context.font = `${this.lineHeight}px Arial`;

    context.textBaseline = 'top';

    context.fillText(this.content, this.startCoords.x, this.startCoords.y);
    }
}