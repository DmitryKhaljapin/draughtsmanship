import { Coords, Shape } from "./draw-state";

interface DrawObject {
    startCoords: Coords;
    endCoords: Coords;
    shape: Shape;
}

export const drawenObjects: DrawObject[] = [];

export const cursorCoords: Coords = {x: null, y: null};

export const preDrawenObject: {object: DrawObject | null} = {
    object: null
};