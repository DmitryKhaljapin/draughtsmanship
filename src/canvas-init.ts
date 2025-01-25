const workPlace = document.querySelector('.work-place');
const canvas = document.getElementById('canvas');

export function init() {
    const width = parseInt(getComputedStyle(workPlace).width);
    const height = parseInt(getComputedStyle(workPlace).height);

    canvas.setAttribute('width', String(width));
    canvas.setAttribute('height', String(height));
}