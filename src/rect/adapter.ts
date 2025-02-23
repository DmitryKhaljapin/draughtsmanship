import { canvas } from "../canvas-init";
import { Coords, IAdapter } from "../Shape";
import { RectProxy } from "./proxy";
import { Rect } from "./Rect";

interface ICanvasRect extends IAdapter {
    startCoord: Coords;
    width: number;
    height: number;
}

export class RectCanvasAdapter implements ICanvasRect {
    public startCoord: Coords;
    public width: number;
    public height: number;

    constructor(rect: Rect) {
        const proxyedRect = new RectProxy(rect);

        this.startCoord = {x: proxyedRect.xStart, y: proxyedRect.yStart};

        this.width = proxyedRect.width;
        this.height = proxyedRect.height;
    }

    draw(lineWidth: number) {
        const context = canvas.getContext('2d');
    
        context.lineWidth = lineWidth;
    
        context.strokeRect(this.startCoord.x, this.startCoord.y, this.width, this.height);
    }
}