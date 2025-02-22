import { canvas } from "../canvas-init";
import { Coords, IAdapter, Shape } from "../Shape";
import { Line } from "./Line";

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
    startCoords: Coords;
    endCoords: Coords;

    constructor(line: Line) {
        this.startCoords = {x: line.xStart, y: line.yStart}

        const xEnd = line.width * Math.cos(line.angle);
        const yEnd = line.width * Math.sin(line.angle);

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