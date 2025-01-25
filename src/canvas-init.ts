const workPlace = document.querySelector('.work-place');
export const canvas: HTMLCanvasElement = document.getElementById('canvas') as HTMLCanvasElement;

export function init() {
    const width = parseInt(getComputedStyle(workPlace).width);
    const height = parseInt(getComputedStyle(workPlace).height);

    canvas.setAttribute('width', String(width));
    canvas.setAttribute('height', String(height));
}