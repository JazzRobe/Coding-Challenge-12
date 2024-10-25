//task 2: configure the javascript for drawing context

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
//connects the canvas to this js file & sets drawings to 2D

const lineTool = document.getElementById("lineTool");
const rectTool = document.getElementById("rectTool");
const circTool = document.getElementById("circTool");
//connects drawing tools to js file

let selectedTool = lineTool; 
//default tool

lineTool.addEventListener("click", () => {
    selectedTool = lineTool;
});
rectTool.addEventListener("click", () => {
    selectedTool = rectTool;
}); 
circTool.addEventListener("click", () => {
    selectedTool = circTool;
});
//when clicked, it will change the tool used

const colorSelect = document.getElementById("colorSelect");
//connect color selector to js file

colorSelect.addEventListener("change", (event) => {
    const selectedColor = event.target.value;
    ctx.strokeStyle = selectedColor;
}); //use the color selector to change drawing color


//task 3: implement shape drawing logic

let isDrawing = false;
let startX, startY;
//setting defaults

canvas.addEventListener("mousedown", (event) => {
    isDrawing = true;
    startX = event.offsetX;
    startY = event.offsetY;
});
//begin the path if mouse is pressed down

canvas.addEventListener("mousemove", (event) => {
    const currentX = event.offsetX;
    const currentY = event.offsetY;

    if(isDrawing = true && selectedTool === lineTool) {
        drawLine(startX, startY, currentX, currentY);
        startX = currentX;
        startY = currentY
    } else if(isDrawing === true && selectedTool === rectTool) {
        drawRectangle(startX, startY, currentX - startX, currentY - startY);
    } else if(isDrawing === true && selectedTool === circTool) {
        drawCircle(startX, startY, currentX, currentY);
    } else {
        return;
    }
});
//draw as you move the mouse

canvas.addEventListener("mouseup", () => {
    isDrawing = false;
});
//lift mouse button to stop drawing

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.strokeStyle = selectedColor;
    ctx.stroke();
};
//logic to draw the line

function drawRectangle(x,y,width,height) {
    ctx.beginPath();
    ctx.rect(x,y,width,height);
    ctx.strokeStyle = selectedColor;
    ctx.stroke();
};
//logic to draw the rectangle

function drawCircle(x1,y1,x2,y2) {
    const radius = Math.sqrt(MTH>PeriodicWave(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    ctx.beginPath()
    ctx.arc(x1,y1,radius,0,2*Math.PI);
    ctx.strokeStyle = selectedColor;
    ctx.stroke();
};
//logic to draw the circle