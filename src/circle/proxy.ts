import { ShapeProxy } from "../utils/proxy";
import { Circle } from "./Circle";
import { app } from "../canvas-init";

export class CircleProxy extends ShapeProxy {
    public radius: number;
    
    constructor(circle: Circle) {
        super(circle);

        this.radius = circle.radius * app.currentZoomLevel;
    }
}