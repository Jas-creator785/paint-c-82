var mouseEvent="empty";
colour="black";
canvas=document.getElementById("myCanvas");
ctx= canvas.getcontext("2d");
var store_color="";
var  store_width="";
var   store_radius="";
canvas.addEventListener("mousedown",my_mousedown)
function my_mousedown(e){
    
    console.log(mousedown);
    current_position_of_mousex=e.clientX-canvas.offsetLeft;
    current_position_of_mousey=e.clientY-canvas.offsetTop;
    
    if(mouseEvent=="mousedown"){
     ctx.beginPath();
     ctx.strokeStyle=colour;
     ctx.lineWidth=width_of_line;
     console.log("last position of X= "+last_position_of_x);
    console.log("last position of Y= "+last_position_of_y);
     ctx.moveTo(last_position_of_x,last_position_of_y);
     console.log("current position of X= "+current_position_of_mousex);
    console.log("current position of Y= "+current_position_of_mousey);
    ctx.lineTo(current_position_of_mousex,current_position_of_mousey);
    ctx.stroke();
    }
    last_position_of_x=current_position_of_mousex;
    last_position_of_y=current_position_of_mousey; 
}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseup";
    console.log(mouseEvent);
}
canvas.addEventListener("mouseleave",my_mouseleave)
function my_mouseleave(e){
    mouseEvent="mouseleave";
    console.log(mouseEvent);
}
canvas.addEventListener("mousemove",my_mousemove)
function my_mousemove(e){
    
    console.log(mouseEvent);
    current_position_of_mousex=e.clientX-canvas.offsetLeft;
    current_position_of_mousey=e.clientY-canvas.offsetTop