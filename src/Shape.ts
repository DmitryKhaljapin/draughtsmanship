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
    protected xStart: null | number;
    protected yStart: null | number;

    name: ShapeName;

    constructor() {
        this.xStart = null;
        this.yStart = null;
    }

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