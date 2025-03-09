import { canvas } from "../canvas-init";
import { app } from "../canvas-init";

export class Grid {

    constructor(public xStart: number, 
        public yStart: number, 
        public width: number, 
        public height: number) {}

    private drawVertical() {
        const context = canvas.getContext('2d');

        context.beginPath();
    
        context.lineWidth = 1;

        const xStart = this.xStart * app.currentZoomLevel - app.dragPosition.currentOffset.x;
        const yStart = this.yStart * app.currentZoomLevel - app.dragPosition.currentOffset.y;
        const height = this.height * app.currentZoomLevel;

        for (let step = 0; step <= this.width; step += 50) {
            const currentStep = step * app.currentZoomLevel;

            context.moveTo(xStart + currentStep, yStart);
            context.lineTo(xStart + currentStep, yStart + height);
        }
    
        context.stroke();
    }

    private drawHorizontal() {
        const context = canvas.getContext('2d');

        context.beginPath();
    
        context.lineWidth = 1;
        
        const xStart =  this.xStart * app.currentZoomLevel - app.dragPosition.currentOffset.x;
        const yStart = this.yStart * app.currentZoomLevel - app.dragPosition.currentOffset.y;
        const width = this.width * app.currentZoomLevel;

        for (let step = 0; step <= this.height; step += 50) {
            const currentStep = step * app.currentZoomLevel;
            
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