import { canvas } from "../canvas-init";
import { drawenObjects, preDrawenObject } from "../canvas-state";
import { textInput } from "../setParams";
import { Coords, Shape, ShapeName } from "../Shape";
import { Created, TextState } from "./TextState"

export class Text extends Shape {
    private state: TextState

    private content: string

    constructor() {
        super();

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

    private _draw(mode: 'preDraw' | 'draw') {
        const context = canvas.getContext('2d');
    
        const lineHeight = 20;
        
        context.fillStyle = `rgba(0, 0, 0, ${mode === 'draw'? 1 : 0.5})`;
        
        context.font = `${lineHeight}px Arial`;
    
        context.textBaseline = 'top';
    
        context.fillText(this.content, this.xStart, this.yStart);
    }

    public build() {
        drawenObjects.push(this);

        textInput.value = ''; // FIXME use observer instead;

        preDrawenObject.object = new Text();
    }

    public draw() {
        this._draw('draw');
    }

    public preDraw() {
        this._draw('preDraw');
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