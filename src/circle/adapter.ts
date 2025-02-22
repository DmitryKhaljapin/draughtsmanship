import { canvas } from "../canvas-init";
import { Coords, IAdapter } from "../Shape";
import { Circle } from "./Circle";


interface ICanvasAdapter extends IAdapter {
    startCoords: Coords;
    radius: number; //radians
}

export class CircleCanvasAdapter implements ICanvasAdapter {
    startCoords: Coords;
    radius: number;

    constructor(circle: Circle) {
        this.startCoords = {x: circle.xStart, y: circle.yStart};
        this.radius = circle.radius;
    }

    draw(lineWidth: number) {
        const context = canvas.getContext('2d');
          
        context.lineWidth = lineWidth;
        
        context.beginPath();
        
        context.arc(this.startCoords.x, this.startCoords.y, this.radius, 0, 2 * Math.PI);
    
        context.stroke();
    }
}