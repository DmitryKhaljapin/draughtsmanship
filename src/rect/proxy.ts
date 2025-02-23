import { currentZoom } from "../canvas-state";
import { ShapeProxy } from "../utils/proxy"
import { Rect } from "./Rect";

export class RectProxy extends ShapeProxy {
    public width: number;
    public height: number;

    constructor(rect: Rect) {
        super(rect);

        this.width = rect.width * currentZoom.value;
        this.height = rect.height * currentZoom.value;
    }
}