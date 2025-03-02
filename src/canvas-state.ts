import { Grid } from "./grid/Grid";
import { Coords, Shape } from "./Shape";

export const drawenObjects: (Shape | Grid)[] = [];

export const cursorCoords: Coords = {x: null, y: null};

export const preDrawenObject: {object: Shape | null} = {
    object: null
};

export const currentZoom = {
    value: 1,
};

export const drag = {
    draggingMode: false,
    isDragging: false,
    startCoords: {x: 0, y: 0},
    prevOffset: {x: 0, y: 0},
    currentOffset: {x: 0, y: 0},
}