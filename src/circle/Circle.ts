import { canvas } from "../canvas-init";
import { drawenObjects, preDrawenObject } from "../canvas-state";
import { radiusInput } from "../setParams";
import { Coords, IAdapterConstructor, Shape, ShapeName } from "../Shape";
import { CircleState, Created } from "./CircleState";

export class Circle extends Shape {
    private state: CircleState;

    public radius: null | number;

    constructor(adapter: IAdapterConstructor) {
        super(adapter);
        
        this.radius = null;
        
        this.name = ShapeName.CIRCLE;

        this.setState(new Created());
    }

    public setState(state: CircleState) {
        this.state = state;
        this.state.setContext(this);
    }

    public setEndCoords({x, y}: Coords) {
       this.radius = Math.sqrt((x - this.xStart)**2 + (y - this.yStart)**2);
    }

    public setRadius(radius: number) {
        this.radius = radius;
    }

    public build() {
        drawenObjects.push(this);

        radiusInput.value = ''; // FIXME use observer instead;

        preDrawenObject.object = new Circle(this.adapter);
    }

   public draw() {
        this._draw(4);
    }

   public preDraw() {
        this._draw(1); 
    }

    /*-------------------------------------------------/state's methods/*/

    public clickHandler(coords: Coords) {
        this.state.clickHandler(coords);
    }

    public moveHandler(coords: Coords) {
        this.state.moveHandler(coords);
    }

    public inputRadius(radius: number) {
        this.state.setRadius(radius);
    }
}