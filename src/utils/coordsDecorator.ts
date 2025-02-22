// import { currentZoom } from "../canvas-state";
// import { Coords, Shape } from "../Shape";

// export function coordsDecorator(_: Shape, __: string, descriptor: TypedPropertyDescriptor<(coords: Coords) => void>) {
//     const method = descriptor.value;

//     descriptor.value = function(coords: Coords) {
//         const x = coords.x / currentZoom.value;
//         const y = coords.y / currentZoom.value;

//         return method.call(this, {x, y});
//     }
// }