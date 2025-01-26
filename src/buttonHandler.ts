import { drawState, Shape } from "./draw-state";

const buttons = document.querySelectorAll('button')

buttons.forEach(button => {
    button.addEventListener('click', event => {
        const currentButton = event.target as HTMLButtonElement;
        const currentButtonShape = currentButton.dataset.shape as Shape;

        buttons.forEach(button => button.style.outline = null);

        if (currentButtonShape === drawState.shape) {
            drawState.shape = null;
            return;
        }

        drawState.setShape(currentButtonShape);

        if (currentButtonShape === drawState.shape) {

            button.style.outline = '2px solid red'
        }
    })
})