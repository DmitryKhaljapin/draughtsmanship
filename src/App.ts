import { AppState, InitialState } from "./AppState";
import { Grid } from "./grid/Grid";
import { Coords, Shape } from "./Shape";

export interface IDragPosition {
    isDragging: boolean
    startCoords: Coords;
    prevOffset: Coords;
    currentOffset: Coords;
}

export class App {
    public state: AppState;

    public drawenObjects: (Shape | Grid)[];
    public cursorCoords: Coords;
    public preDrawenObject: Shape | null;
    public currentZoomLevel: number;
    public dragPosition: IDragPosition;

    constructor() {
        this.drawenObjects = [];

        this.cursorCoords = {x: null, y: null};

        this.preDrawenObject = null;

        this.currentZoomLevel = 1;

        this.dragPosition = {
            isDragging: false,
            startCoords: {x: 0, y: 0},
            prevOffset: {x: 0, y: 0},
            currentOffset: {x: 0, y: 0},
        }

        this.setState(new InitialState());
    }

    public setState(state: AppState) {
        this.state = state;
        this.state.setContext(this);
    }
    
    public setCursorCoords({x, y}: Coords) {
        this.cursorCoords.x = x;
        this.cursorCoords.y = y;
    
    }

    /*-------------------------------------------------/state's methods/*/

    public mouseDownHandler(coords: Coords): void {
        this.state.mouseDownHandler(coords);
    }

    public mouseUpHandler(): void {
        this.state.mouseUpHandler();
    }

    public clickHandler(coords: Coords) {
        this.state.clickHandler(coords);
    }

    public moveHandler(coords: Coords): void {
        this.state.moveHandler(coords);
    }
}