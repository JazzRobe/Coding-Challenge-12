//task 2: configure the javascript for drawing context

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
//connects the canvas to this js file & sets drawings to 2D

const lineTool = document.getElementById("lineTool");
const rectTool = document.getElementById("rectTool");
const circTool = document.getElementById("circTool");
//connects drawing tools to js file

let selectedTool = lineTool;
let selectedColor = "black" 
//default tool and color

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
    ctx.strokeStyle = selectedColor;

    if(isDrawing === true && selectedTool === lineTool) {
        drawLine(startX, startY, currentX, currentY);
        startX = currentX;
        startY = currentY
    } else if(isDrawing === true && selectedTool === rectTool) {
        drawRectangle(startX, startY, currentX - startX, currentY - startY);
    } else if(isDrawing === true && selectedTool === circTool) {
        drawCircle(startX, startY, currentX, currentY);
    }
});
//draw as you move the mouse, depending on selected tool

canvas.addEventListener("mouseup", () => {
    isDrawing = false;
});
//lift mouse button to stop drawing

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
};
//logic to draw the line

function drawRectangle(x,y,width,height) {
    ctx.beginPath();
    ctx.rect(x,y,width,height);
    ctx.fillStyle = selectedColor;
    ctx.fill();
};
//logic to draw the rectangle

function drawCircle(x1,y1,x2,y2) {
    const radius = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    ctx.beginPath()
    ctx.arc(x1,y1,radius,0,2*Math.PI);
    ctx.fillStyle = selectedColor;
    ctx.fill();
};
//logic to draw the circle


//task 4: add color selection and canvas clearing

const colorSelect = document.getElementById("colorSelect");
//connect color selector to js file

colorSelect.addEventListener("change", (event) => {
    selectedColor = event.target.value;
}); 
//use the color selector to change drawing color

const clearCanvas = document.getElementById("clearCanvas");
clearCanvas.addEventListener("click", () => {
    ctx.clearRect(0,0,canvas.width,canvas.height);
});
//clears all work on the canvas