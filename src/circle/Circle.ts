import { canvas } from "../canvas-init";
import { drawenObjects, preDrawenObject } from "../canvas-state";
import { radiusInput } from "../setParams";
import { Coords, Shape, ShapeName } from "../Shape";
import { CircleState, Created } from "./CircleState";
// TODO: user buider pattern

export class Circle extends Shape {
    private state: CircleState;

    private radius: null | number;

    constructor() {
        super();

        this.radius = null;
        
        this.name = ShapeName.CIRCLE;

        this.setState(new Created());
    }

    public setState(state: CircleState) {
        this.state = state;
        this.state.setContext(this);
    }

    private _draw(lineWidth: number) {
        const context = canvas.getContext('2d');
    
        context.lineWidth = lineWidth;
    
        context.beginPath();
    
        context.arc(this.xStart, this.yStart, this.radius, 0, 2 * Math.PI);
    
        context.stroke();
    }

   public getIsRadiusSet() {
        if (this.radius) return true;
        return false;
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

        preDrawenObject.object = new Circle();
    }

   public draw() {
        this._draw(4)
    }

   public preDraw() {
        if(!this.getIsStartCoordSet()) return;
        
        this._draw(1) 
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