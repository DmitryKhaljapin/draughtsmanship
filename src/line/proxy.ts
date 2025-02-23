import { currentZoom } from "../canvas-state";
import { ShapeProxy } from "../utils/proxy";
import { Line } from "./Line";

export class LineProxy extends ShapeProxy {
    public width: number;
    public angle: number; //radians;

    constructor(line: Line) {
        super(line);

        this.width = line.width * currentZoom.value;
        this.angle = line.angle;
    }
}