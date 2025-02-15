import { Coords } from "../Shape";
import { Rect } from "./Rect";

export enum RectStateNames {
    Created = 'created',

    WithWidth = 'withWidth',
    WithHeight = 'withHeight',
    WithStartCoords = 'withStartCoord',

    WithWidthAndHeight = 'withWidthAndHeight',

    WithStartCoordsAndWidth = 'withStartCoordsAndWidth',
    WithStartCoordsAndHeight = 'withStartCoordsAndHeight',
}

export abstract class RectState {
    protected stateName: RectStateNames;
    protected rect: Rect;

    public setContext(rect: Rect) {
        this.rect = rect;
    }

    public abstract setWidth(width: number): void;
    public abstract setHeight(height: number): void;

    public abstract clickHandler(coords: Coords): void;
    public abstract moveHandler(coords: Coords): void; 
}

export class Created extends RectState {
    constructor() {
        super();

        this.stateName = RectStateNames.Created;
    }

    public setWidth(width: number): void {
        this.rect.setWidth(width);

        this.rect.setState(new WithWidth());
    }

    public setHeight(height: number): void {
        this.rect.setHeight(height);

        this.rect.setState(new WithHeight());
    }

    public clickHandler(coords: Coords): void {
        this.rect.setStartCoords(coords);

        this.rect.setState(new WithStartCoords());
    }

    public moveHandler(_: Coords): void {
        return;
    }
}

export class WithStartCoords extends RectState {
    constructor() {
        super();

        this.stateName = RectStateNames.WithStartCoords;
    }

    public setWidth(width: number): void {
        this.rect.setWidth(width);

        this.rect.setState(new WithStartCoordsAndWidth());
    }

    public setHeight(height: number): void {
        this.rect.setHeight(height);

        this.rect.setState(new WithStartCoordsAndHeight());
    }

    public clickHandler(coords: Coords): void {
        this.rect.setEndCoords(coords);

        this.rect.build();
    }

    public moveHandler(coords: Coords): void {
        this.rect.setEndCoords(coords);
    }
}

export class WithWidth extends RectState {
    constructor() {
        super();

        this.stateName = RectStateNames.WithWidth;
    }

    public setWidth(width: number): void {
        this.rect.setWidth(width);
    }

    public setHeight(height: number): void {
        this.rect.setHeight(height);

        this.rect.setState(new WithWidthAndHeight());
    }

    public clickHandler(coords: Coords) {
        this.rect.setStartCoords(coords);

        this.rect.setState(new WithStartCoordsAndWidth());
    }

    public moveHandler(_: Coords) {
        return;
    }
}

export class WithHeight extends RectState {
    constructor() {
        super();

        this.stateName = RectStateNames.WithHeight;
    }

    public setWidth(width: number): void {
        this.rect.setWidth(width);

        this.rect.setState(new WithWidthAndHeight());
    }

    public setHeight(height: number): void {
        this.rect.setHeight(height);
    }

    public clickHandler(coords: Coords) {
        this.rect.setStartCoords(coords);

        this.rect.setState(new WithStartCoordsAndHeight());
    }

    public moveHandler(coords: Coords) {
        this.rect.setWidth(coords);
    }
}

export class WithWidthAndHeight extends RectState {
    constructor() {
        super();

        this.stateName = RectStateNames.WithWidthAndHeight;
    }

    public setWidth(width: number): void {
        this.rect.setWidth(width);
    }

    public setHeight(height: number): void {
        this.rect.setHeight(height);
    }

    public clickHandler(coords: Coords) {
        this.rect.setStartCoords(coords);

        this.rect.build();
    }

    public moveHandler(coords: Coords) {
        this.rect.setStartCoords(coords);
    }
}

export class WithStartCoordsAndWidth extends RectState {
    constructor() {
        super();

        this.stateName = RectStateNames.WithStartCoordsAndWidth;
    }

    public setWidth(width: number): void {
        this.rect.setWidth(width);
    }

    public setHeight(height: number): void {
        this.rect.setHeight(height);

        this.rect.build();
    }

    public clickHandler(coords: Coords) {
        this.rect.setHeight(coords);

        this.rect.build();
    }

    public moveHandler(coords: Coords) {
        this.rect.setHeight(coords);
    }
}

export class WithStartCoordsAndHeight extends RectState {
    constructor() {
        super();

        this.stateName = RectStateNames.WithStartCoordsAndHeight;
    }

    public setWidth(width: number): void {
        this.rect.setWidth(width);

        this.rect.build();
    }

    public setHeight(height: number): void {
        this.rect.setHeight(height);
    }

    public clickHandler(coords: Coords): void {
        this.rect.setWidth(coords);

        this.rect.build();
    }

    public moveHandler(coords: Coords) {
        this.rect.setWidth(coords);
    }
}