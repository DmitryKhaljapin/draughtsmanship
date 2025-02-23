import { currentZoom } from "../canvas-state";
import { ShapeProxy } from "../utils/proxy";
import { Text } from "./Text";

export class TextProxy extends ShapeProxy {
    public content: string;
    public lineHeight: number;

    constructor(text: Text) {
        super(text);

        this.content = text.content;
        this.lineHeight = text.lineHeight * currentZoom.value;
    }
}