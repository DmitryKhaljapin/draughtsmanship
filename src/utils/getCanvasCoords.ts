import { app } from "../canvas-init";
import { Coords } from "../Shape";

export function getCanvasCoords(event: MouseEvent): Coords {
    const canvas = event.target as HTMLCanvasElement;

    const canvasRect = canvas.getBoundingClientRect();
    
    const x = event.clientX - canvasRect.x;
    const y = event.clientY - canvasRect.y

    return {x, y}
}
