//task 2: configure the javascript for drawing context

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
//connects the canvas to this js file & sets drawings to 2D

const lineTool = document.getElementById("lineTool");
const rectTool = document.getElementById("rectTool");
//connects drawing tools to js file

let selectedTool = lineTool; 
//default tool

lineTool.addEventListener("click", () => {
    selectedTool = lineTool;
});
rectTool.addEventListener("click", () => {
    selectedTool = rectTool;
}); 
//when clicked, it will change the tool used.