import { drawenObjects, preDrawenObject } from "../canvas-state";
import { angleInput, widthInput } from "../setParams";
import { Coords, IAdapterConstructor, isCoordsArg, Shape, ShapeName } from "../Shape";
import { coordsDecorator } from "../utils/coordsDecorator";
import { CoordsToParams } from "./adapter";
import { Created, LineState } from "./LineState";

interface ILine {
    width: number,
    angle: number, // radians
}

export class Line extends Shape  implements ILine {
    private state: LineState;

    public width: null | number;
    public angle: null | number; // radians

    constructor(adapter: IAdapterConstructor) {
        super(adapter);

        this.width = null;
        this.angle = null; // radians

        this.name = ShapeName.LINE;

        this.setState(new Created());
    }

    public static create(adapter: IAdapterConstructor) {
        preDrawenObject.object = new Line(adapter)
    }

    public setState(state: LineState) {
        this.state = state;
        this.state.setContext(this);
    }

    public getIsWidthSet() {
        if (this.width) return true;

        return false;
    }

    public getIsAngleSet() {
        if (this.angle) return true;

        return false;
    }

    @coordsDecorator
    public setEndCoords(coords: Coords): void {
        [this.width, this.angle] = CoordsToParams({x: this.xStart, y: this.yStart}, coords);
    }

    public setWidth(value: number): void;
    public setWidth(value: Coords): void;
    public setWidth(value: number | Coords) {
        if (isCoordsArg(value)){
            [this.width] = CoordsToParams({x: this.xStart, y: this.yStart}, value);
        }
        else {
            this.width = value;
        }
    }

    public setAngle(value: number): void;
    public setAngle(value: Coords): void;
    public setAngle(value: number | Coords) { //degrees
        if (isCoordsArg(value)) {
            [, this.angle] = CoordsToParams({x: this.xStart, y: this.yStart}, value);
        }
        else {
            this.angle = value * Math.PI / 180;
        }
    }

    public build() {
        drawenObjects.push(this);

        widthInput.value = ''; // FIXME using observer instead;
        angleInput.value = ''; // FIXME using observer instead;

        Line.create(this.adapter);
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

    public inputAngle(height: number) {
        this.state.setAngle(height);
    }

    public clickHandler(coords: Coords) {
        this.state.clickHandler(coords);
    }

    public moveHandler(coords: Coords) {
        this.state.moveHandler(coords);
    }
}