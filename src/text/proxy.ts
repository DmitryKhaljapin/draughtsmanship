import { ShapeProxy } from "../utils/proxy";
import { Text } from "./Text";
import { app } from "../canvas-init";

export class TextProxy extends ShapeProxy {
    public content: string;
    public lineHeight: number;

    constructor(text: Text) {
        super(text);

        this.content = text.content;
        this.lineHeight = text.lineHeight * app.currentZoomLevel;
    }
}