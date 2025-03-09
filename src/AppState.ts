import { App } from "./App";
import { Coords } from "./Shape";
import { CoordsProxy } from "./utils/proxy";

export enum AppStateNames {
    InitialState = 'initialState',
    Drawing = 'drawing',
    Dragging = 'dragging',
}

export abstract class AppState {
    protected app: App;
    public name: AppStateNames;

    public setContext(app: App) {
        this.app = app;
    }

    public abstract mouseDownHandler(coords: Coords): void;
    public abstract mouseUpHandler(): void;
    public abstract clickHandler(coords: Coords): void;

    public moveHandler(coords: Coords): void {
        this.app.setCursorCoords(coords);
    };
}

export class InitialState extends AppState {
    constructor() {
        super();

        this.name = AppStateNames.InitialState;
    }

    public mouseDownHandler(_: MouseEvent): void {
        return;
    }
    
    public mouseUpHandler(): void {
        return;
    }

    public clickHandler(_: Coords): void {
        return;
    }

    public moveHandler(coords: Coords): void {
        const proxyedCoords = new CoordsProxy(coords);

        super.moveHandler(proxyedCoords);
    }
}

export class Drawing extends AppState {
    constructor() {
        super();

        this.name = AppStateNames.Drawing;
    }

    public mouseDownHandler(_: MouseEvent): void {
        return;
    }

    public mouseUpHandler(): void {
        return;
    }
    
    public clickHandler(coords: Coords): void {
        const proxyedCoords = new CoordsProxy(coords);

        this.app.preDrawenObject.clickHandler(proxyedCoords);
    }

    public moveHandler(coords: Coords): void {
        const proxyedCoords = new CoordsProxy(coords);

        super.moveHandler(proxyedCoords);

        this.app.preDrawenObject.moveHandler(proxyedCoords);
    }
}

export class Dragging extends AppState {
    constructor() {
        super();

        this.name = AppStateNames.Dragging;
    }

    public mouseDownHandler({x, y}: Coords): void {
        this.app.dragPosition.isDragging = true;
        this.app.dragPosition.startCoords.x = x;
        this.app.dragPosition.startCoords.y = y;
    
        this.app.dragPosition.prevOffset.x = this.app.dragPosition.currentOffset.x;
        this.app.dragPosition.prevOffset.y = this.app.dragPosition.currentOffset.y;
    }

    public mouseUpHandler(): void {
        this.app.dragPosition.isDragging = false;
    }

    public clickHandler(_: Coords): void {
        return
    }

    public moveHandler(coords: Coords): void {
        super.moveHandler(coords);

        if (this.app.dragPosition.isDragging) {
            const newOffset = {
                x: this.app.dragPosition.startCoords.x - coords.x,
                y: this.app.dragPosition.startCoords.y - coords.y
            }
    
            this.app.dragPosition.currentOffset.x = this.app.dragPosition.prevOffset.x + newOffset.x;
            this.app.dragPosition.currentOffset.y = this.app.dragPosition.prevOffset.y + newOffset.y;
        }
    }
}