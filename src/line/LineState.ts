import { Coords } from "../Shape";
import { Line } from "./Line";

export enum LineStateNames {
    Created = 'created',

    WithWidth = 'withWidth',
    WithAngle = 'withAngle',
    WithStartCoords = 'withStartCoord',

    WithWidthAndAngle = 'withWidthAndAngle',

    WithStartCoordsAndWidth = 'withStartCoordsAndWidth',
    WithStartCoordsAndAngle = 'withStartCoordsAndAngle',
}

export abstract class LineState {
    protected stateName: LineStateNames;
    protected line: Line;

    public setContext(line: Line) {
        this.line = line;
    }

    public abstract setWidth(width: number): void;
    public abstract setAngle(angle: number): void; //degrees

    public abstract clickHandler(coords: Coords): void;
    public abstract moveHandler(coords: Coords): void;
}

export class Created extends LineState {
    constructor() {
        super();

        this.stateName = LineStateNames.Created;
    }

    public setWidth(width: number): void {
        this.line.setWidth(width);

        this.line.setState(new WithWidth());
    }

    public setAngle(angle: number): void {
        this.line.setAngle(angle);

        this.line.setState(new WithAngle());
    }

    public clickHandler(coords: Coords): void {
        this.line.setStartCoords(coords);

        this.line.setState(new WithStartCoords());
    }

    public moveHandler(_: Coords): void {
        return;
    }
}

export class WithStartCoords extends LineState {
    constructor() {
        super();

        this.stateName = LineStateNames.WithStartCoords;
    }

    public setWidth(width: number): void {
        this.line.setWidth(width);

        this.line.setState(new WithStartCoordsAndWidth());
    }

    public setAngle(angle: number): void {
        this.line.setAngle(angle);

        this.line.setState(new WithStartCoordsAndAngle());
    }

    public clickHandler(coords: Coords): void {
        this.line.setEndCoords(coords);

        this.line.build();
    }

    public moveHandler(coords: Coords): void {
        this.line.setEndCoords(coords);
    }
}

export class WithWidth extends LineState {
    constructor() {
        super();

        this.stateName = LineStateNames.WithWidth;
    }

    public setWidth(width: number): void {
        this.line.setWidth(width);
    }

    public setAngle(angle: number): void {
        this.line.setAngle(angle);

        this.line.setState(new WithWidthAndAngle());
    }

    public clickHandler(coords: Coords) {
        this.line.setStartCoords(coords);

        this.line.setState(new WithStartCoordsAndWidth());
    }

    public moveHandler(_: Coords) {
        return;
    }
}

export class WithAngle extends LineState {
    constructor() {
        super();

        this.stateName = LineStateNames.WithAngle;
    }

    public setWidth(width: number): void {
        this.line.setWidth(width);

        this.line.setState(new WithWidthAndAngle());
    }

    public setAngle(angle: number): void {
        this.line.setAngle(angle);
    }

    public clickHandler(coords: Coords) {
        this.line.setStartCoords(coords);

        this.line.setState(new WithStartCoordsAndAngle());
    }

    public moveHandler(coords: Coords) {
        this.line.setWidth(coords);
    }
}

export class WithWidthAndAngle extends LineState {
    constructor() {
        super();

        this.stateName = LineStateNames.WithWidthAndAngle;
    }

    public setWidth(width: number): void {
        this.line.setWidth(width);
    }

    public setAngle(angle: number): void {
        this.line.setAngle(angle);
    }

    public clickHandler(coords: Coords) {
        this.line.setStartCoords(coords);

        this.line.build();
    }

    public moveHandler(coords: Coords) {
        this.line.setStartCoords(coords);
    }
}

export class WithStartCoordsAndWidth extends LineState {
    constructor() {
        super();

        this.stateName = LineStateNames.WithStartCoordsAndWidth;
    }

    public setWidth(width: number): void {
        this.line.setWidth(width);
    }

    public setAngle(angle: number): void {
        this.line.setAngle(angle);

        this.line.build();
    }

    public clickHandler(coords: Coords) {
        this.line.setAngle(coords);

        this.line.build();
    }

    public moveHandler(coords: Coords) {
        this.line.setAngle(coords);
    }
}

export class WithStartCoordsAndAngle extends LineState {
    constructor() {
        super();

        this.stateName = LineStateNames.WithStartCoordsAndAngle;
    }

    public setWidth(width: number): void {
        this.line.setWidth(width);

        this.line.build();
    }

    public setAngle(angle: number): void {
        this.line.setAngle(angle);
    }

    public clickHandler(coords: Coords): void {
        this.line.setWidth(coords);

        this.line.build();
    }

    public moveHandler(coords: Coords) {
        this.line.setWidth(coords);
    }
}