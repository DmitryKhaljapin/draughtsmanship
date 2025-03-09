import { Coords, Shape } from "../Shape";
import { app } from "../canvas-init";

export class ShapeProxy {
    public xStart: number;
    public yStart: number;

    constructor(shape: Shape) {
        this.xStart = shape.xStart * app.currentZoomLevel - app.dragPosition.currentOffset.x;
        this.yStart = shape.yStart * app.currentZoomLevel - app.dragPosition.currentOffset.y;
    }
}

export class CoordsProxy {
    public x: number;
    public y: number;

    constructor({x, y}: Coords) {
        this.x = (x + app.dragPosition.currentOffset.x) / app.currentZoomLevel;
        this.y = (y + app.dragPosition.currentOffset.y) / app.currentZoomLevel;
    }
}