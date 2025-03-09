import { ShapeProxy } from "../utils/proxy";
import { Line } from "./Line";
import { app } from "../canvas-init";

export class LineProxy extends ShapeProxy {
    public width: number;
    public angle: number; //radians;

    constructor(line: Line) {
        super(line);

        this.width = line.width * app.currentZoomLevel;
        this.angle = line.angle;
    }
}