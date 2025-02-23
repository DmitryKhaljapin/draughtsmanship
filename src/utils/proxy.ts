import { currentZoom } from "../canvas-state";
import { Shape } from "../Shape";

export class ShapeProxy {
    public xStart: number;
    public yStart: number;

    constructor(shape: Shape) {
        this.xStart = shape.xStart * currentZoom.value;
        this.yStart = shape.yStart * currentZoom.value;
    }
}