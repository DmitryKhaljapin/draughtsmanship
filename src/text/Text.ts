import { canvas } from "../canvas-init";
import { drawenObjects, preDrawenObject } from "../canvas-state";
import { textInput } from "../setParams";
import { Coords, IAdapterConstructor, Shape, ShapeName } from "../Shape";
import { Created, TextState } from "./TextState"

export class Text extends Shape {
    private state: TextState

    public content: string

    constructor(adapter: IAdapterConstructor) {
        super(adapter);

        this.content = ''

        this.name = ShapeName.TEXT

        this.setState(new Created());
    }

    public setState(state: TextState) {
        this.state = state;
        this.state.setContext(this);
    }

    public setContent(content: string) {
        this.content = content;
    }

    public build() {
        drawenObjects.push(this);

        textInput.value = ''; // FIXME use observer instead;

        preDrawenObject.object = new Text(this.adapter);
    }

    public draw() {
        this._draw(1);
    }

    public preDraw() {
        this._draw(0.5);
    }

    /*-------------------------------------------------/state's methods/*/

    public clickHandler(coords: Coords) {
        this.state.clickHandler(coords);
    }

    public moveHandler(coords: Coords) {
        this.state.moveHandler(coords);
    }

    public inputContent(content: string) {
        this.state.setContent(content);
    }
}