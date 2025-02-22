import { canvas } from "../canvas-init";
import { Coords, IAdapter } from "../Shape";
import { Rect } from "./Rect";

interface ICanvasRect extends IAdapter {
    startCoord: Coords;
    width: number;
    height: number;
}

export class RectCanvasAdapter implements ICanvasRect {
    startCoord: Coords;
    width: number;
    height: number;

    constructor(rect: Rect) {
        this.startCoord = {x: rect.xStart, y: rect.yStart};

        this.width = rect.width;
        this.height = rect.height;
    }

    draw(lineWidth: number) {
        const context = canvas.getContext('2d');
    
        context.lineWidth = lineWidth;
    
        context.strokeRect(this.startCoord.x, this.startCoord.y, this.width, this.height);
    }
}