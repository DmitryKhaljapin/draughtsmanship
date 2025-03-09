import { ShapeProxy } from "../utils/proxy"
import { Rect } from "./Rect";
import { app } from "../canvas-init";

export class RectProxy extends ShapeProxy {
    public width: number;
    public height: number;

    constructor(rect: Rect) {
        super(rect);

        this.width = rect.width * app.currentZoomLevel;
        this.height = rect.height * app.currentZoomLevel;
    }
}