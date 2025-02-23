import { currentZoom } from "../canvas-state";
import { ShapeProxy } from "../utils/proxy";
import { Circle } from "./Circle";

export class CircleProxy extends ShapeProxy {
    public radius: number;
    
    constructor(circle: Circle) {
        super(circle);

        this.radius = circle.radius * currentZoom.value;
    }
}