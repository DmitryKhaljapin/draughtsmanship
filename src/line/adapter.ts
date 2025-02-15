import { Coords } from "../draw-state";

export function ParamsToCoords(width: number, angle: number) {
    const xEnd = width * Math.cos(angle);
    const yEnd = width * Math.sin(angle);

    return [xEnd, yEnd];
}

export function CoordsToParams(start: Coords, end: Coords) {
    const _width = end.x - start.x;

    const _height = start.y - end.y;

    const width = Math.sqrt(_width ** 2 + _height ** 2);
    
    let angle = Math.atan(_height / _width); // redians
    
    if (_width < 0) angle += Math.PI;

    return [width, angle];
}