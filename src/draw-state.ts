export interface Coords {
    x: null | number;
    y: null | number;
};

export enum Shape {
   LINE = 'line',
   RECT = 'rect',
   CIRCLE = 'circle'
};

interface IDrawState {
    startCoords: Coords | null;
    endCoords: Coords | null;
    shape: Shape | null;
    setStartCoords: (x: number, y: number) => void;
    setEndCoords: (x: number, y: number) => void;
    setShape: (shap: Shape) => void;
    resetCoords: () => void;
};

class DrwaState implements IDrawState {
    startCoords: Coords;
    endCoords: Coords;
    shape: Shape;

    constructor() {
        this.startCoords = null;
        this.endCoords = null;
        this.shape = null;
    }

    setStartCoords(x: number, y: number) {
        this.startCoords = {
            x,
            y
        }
    }

    setEndCoords(x: number, y: number) {
        this.endCoords = {
            x,
            y
        }
    }

    setShape(shap: Shape) {
        this.shape = shap;
    }

    resetCoords() {
        this.startCoords = null;
        this.endCoords = null;
    }
}

export const drawState = new DrwaState();