import { canvas } from "../canvas-init";
import { Coords, IAdapter } from "../Shape";
import { CircleProxy } from "./proxy";
import { Circle } from "./Circle";


interface ICanvasAdapter extends IAdapter {
    startCoords: Coords;
    radius: number; //radians
}

export class CircleCanvasAdapter implements ICanvasAdapter {
    public startCoords: Coords;
    public radius: number;

    constructor(circle: Circle) {
        const proxyedCircle = new CircleProxy(circle);

        this.startCoords = {x: proxyedCircle.xStart, y: proxyedCircle.yStart};
        this.radius = proxyedCircle.radius;
    }

    draw(lineWidth: number) {
        const context = canvas.getContext('2d');
          
        context.lineWidth = lineWidth;
        
        context.beginPath();
        
        context.arc(this.startCoords.x, this.startCoords.y, this.radius, 0, 2 * Math.PI);
    
        context.stroke();
    }
}