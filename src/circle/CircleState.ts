import { Coords } from "../Shape";
import { Circle } from "./Circle";

export enum CircleStateNames {
    Created = 'created',
    WithStartCoords = 'withStartCoords',
    WithRadius = 'withRadius',
}

export abstract class CircleState {
    protected stateName: CircleStateNames;
    protected circle: Circle;

    public setContext(circle: Circle) {
        this.circle = circle;
    }

    public abstract setRadius(radius: number): void;

    public abstract clickHandler(coords: Coords): void;
    public abstract moveHandler(coords: Coords): void;
}

export class Created extends CircleState {
    constructor() {
        super();

        this.stateName = CircleStateNames.Created;
    }

    public setRadius(radius: number) {
        this.circle.setRadius(radius);

        this.circle.setState(new WithRadius());
    }

    public clickHandler(coords: Coords) {
        this.circle.setStartCoords(coords);

        this.circle.setState(new WithStartCoords());
    }

    public moveHandler(_: Coords) {
        return;
    }
}

export class WithStartCoords extends CircleState {
    constructor() {
        super();

        this.stateName = CircleStateNames.WithStartCoords;
    }

    public setRadius(radius: number): void {
        this.circle.setRadius(radius);

        this.circle.build();
    }

    public clickHandler(coords: Coords): void {
        this.circle.setEndCoords(coords);

        this.circle.build();
    }

    public moveHandler(coords: Coords): void {
        this.circle.setEndCoords(coords);
    }
}

export class WithRadius extends CircleState {
    constructor() {
        super();

        this.stateName = CircleStateNames.WithRadius;
    }

    public setRadius(radius: number): void {
        this.circle.setRadius(radius);
    }

    public clickHandler(coords: Coords): void {
        this.circle.setStartCoords(coords);

        this.circle.build();
    }

    public moveHandler(coords: Coords): void {
        this.circle.setStartCoords(coords);
    }
}