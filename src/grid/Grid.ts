import { canvas } from "../canvas-init";
import { currentZoom, drag } from "../canvas-state";

export class Grid {

    constructor(public xStart: number, 
        public yStart: number, 
        public width: number, 
        public height: number) {}

    private drawVertical() {
        const context = canvas.getContext('2d');

        context.beginPath();
    
        context.lineWidth = 1;

        const xStart = this.xStart * currentZoom.value - drag.currentOffset.x;
        const yStart = this.yStart * currentZoom.value - drag.currentOffset.y;
        const height = this.height * currentZoom.value;

        for (let step = 0; step <= this.width; step += 50) {
            const currentStep = step * currentZoom.value;

            context.moveTo(xStart + currentStep, yStart);
            context.lineTo(xStart + currentStep, yStart + height);
        }
    
        context.stroke();
    }

    private drawHorizontal() {
        const context = canvas.getContext('2d');

        context.beginPath();
    
        context.lineWidth = 1;
        
        const xStart =  this.xStart * currentZoom.value - drag.currentOffset.x;
        const yStart = this.yStart * currentZoom.value - drag.currentOffset.y;
        const width = this.width * currentZoom.value;

        for (let step = 0; step <= this.height; step += 50) {
            const currentStep = step * currentZoom.value;
            
            context.moveTo(xStart, yStart + currentStep);
            context.lineTo(xStart + width, yStart + currentStep);
        }
    
        context.stroke();
    }

    public draw() {
        const context = canvas.getContext('2d');
        context.strokeStyle = 'rgba(208, 208, 208, 1)';
    
        this.drawVertical();
        this.drawHorizontal();

        context.strokeStyle = '#000'
    }
}