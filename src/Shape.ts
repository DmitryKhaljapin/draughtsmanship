import { coordsDecorator } from "./utils/coordsDecorator";

export interface IAdapter {
    draw: (lineWidth: number) => void
}

export interface IAdapterConstructor {
    new(shape: Shape): IAdapter;
}

export interface Coords {
    x: number;
    y: number;
}

export enum ShapeName { // rename to drawenObjectNames
   LINE = 'line',
   RECT = 'rect',
   CIRCLE = 'circle',
   TEXT = 'text'
};

export function isCoordsArg(arg: number | Coords): arg is Coords {    
    return typeof arg === 'object';
}

export abstract class Shape {
    public xStart: null | number;
    public yStart: null | number;

    public name: ShapeName;
    
    protected adapter: IAdapterConstructor; 

    constructor(adapter: IAdapterConstructor) {
        this.xStart = null;
        this.yStart = null;

        this.adapter = adapter;
    }
    
    protected _draw(lineWidth: number) {
        const adapter = new this.adapter(this);

        adapter.draw(lineWidth);
    }

    @coordsDecorator
    setStartCoords({x, y}: Coords) {
        this.xStart = x;
        this.yStart = y;
    }

    getStartCoords() {
        return {x: this.xStart, y: this.yStart};
    }

    getIsStartCoordSet() {
        if (this.xStart && this.yStart) return true;
        return false;
    }

    abstract draw(): void;
    abstract preDraw(): void;

    // abstract setEndCoords(coords: Coords): void;

    abstract clickHandler(coords: Coords): void;
    abstract moveHandler(coords: Coords): void;
}