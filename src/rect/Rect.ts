import { canvas } from "../canvas-init";
import { drawenObjects, preDrawenObject } from "../canvas-state";
import { heightInput, widthInput } from "../setParams";
import { Coords, isCoordsArg, Shape, ShapeName } from "../Shape";
import { Created, RectState, } from './RectState';

export class Rect extends Shape {
    private state: RectState;

    private width: null | number;
    private height: null | number;

    constructor() {
        super();

        this.width = null;
        this.height = null;

        this.name = ShapeName.RECT;

        this.setState(new Created());
    }

    public setState(state: RectState) {
        this.state = state;
        this.state.setContext(this);
    }

    private _draw(lineWidth: number) {
        const context = canvas.getContext('2d');
    
        context.lineWidth = lineWidth;
    
        context.strokeRect(this.xStart, this.yStart, this.width, this.height);
    }

    public getIsWidthSet() {
        if (this.width) return true;
        
        return false;
    }

    public getIsHeigthSet() {
        if (this.height) return true;

        return false;
    }

    public setEndCoords({x, y}: Coords) {
        this.width = x - this.xStart;
        this.height = y - this.yStart;
    }

    public setWidth(value: number): void;
    public setWidth(value: Coords): void;
    public setWidth(value: number | Coords) {
        if (isCoordsArg(value)) {
            this.width = value.x - this.xStart;
        }
        else {
            this.width = value;
        }
    }

    public setHeight(value: number): void;
    public setHeight(value: Coords): void;
    public setHeight(value: number | Coords) {
        if (isCoordsArg(value)) {
            this.height = value.y - this.yStart;
        }
        else {
            this.height = value;
        }
    }

    public build() {
        drawenObjects.push(this);

        widthInput.value = ''; // FIXME using observer instead;
        heightInput.value = ''; // FIXME using observer instead;

        preDrawenObject.object = new Rect();
    }

    public draw() {
        this._draw(4);
    }

    public preDraw() {
        this._draw(1);
    }

    /*-------------------------------------------------/state's methods/*/

    public inputWidth(width: number) {
        this.state.setWidth(width);
    }

    public inputHeight(height: number) {
        this.state.setHeight(height);
    }

    public clickHandler(coords: Coords) {
        this.state.clickHandler(coords);
    }

    public moveHandler(coords: Coords) {
        this.state.moveHandler(coords);
    }
}