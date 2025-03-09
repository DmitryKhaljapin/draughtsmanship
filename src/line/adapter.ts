import { canvas } from "../canvas-init";
import { Coords, IAdapter } from "../Shape";
import { Line } from "./Line";
import { LineProxy } from "./proxy";

interface ICanvasLine extends IAdapter {
    startCoords: Coords,
    endCoords: Coords,
}

export function CoordsToParams(start: Coords, end: Coords) {
    const _width = end.x - start.x;

    const _height = start.y - end.y;

    const width = Math.sqrt(_width ** 2 + _height ** 2);
    
    let angle = Math.atan(_height / _width); // redians
    
    if (_width < 0) angle += Math.PI;

    return [width, angle];
}

export class LineCanvasAdapter implements ICanvasLine {
    public startCoords: Coords;
    public endCoords: Coords;

    constructor(line: Line) {
        const proxyedLine = new LineProxy(line);

        this.startCoords = {x: proxyedLine.xStart, y: proxyedLine.yStart};

        const xEnd = proxyedLine.width * Math.cos(proxyedLine.angle);
        const yEnd = proxyedLine.width * Math.sin(proxyedLine.angle);

        this.endCoords = {x: xEnd, y: yEnd};
    }

    draw(lineWidth: number) {
        const context = canvas.getContext('2d');

        context.beginPath();
    
        context.lineWidth = lineWidth;
    
        context.moveTo(this.startCoords.x, this.startCoords.y);
        context.lineTo(this.startCoords.x + this.endCoords.x, this.startCoords.y - this.endCoords.y);
    
        context.stroke();
    }
}