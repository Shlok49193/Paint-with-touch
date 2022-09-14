var mouseEvent = "empty";
var Last_position_of_x, Last_position_of_y;
canvas = document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
colour = "blue";        

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    mouseEvent = "mousedown";
    
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e)
{
    mouseEvent = "mouseleave";
    
}
canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e)
{
    mouseEvent = "mouseup";
    
}
canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e)
{
    current_position_of_x = e.clientX - canvas.offsetLeft;
    current_position_of_y = e.clientY - canvas.offsetTop;
    
    if (mouseEvent == "mousedown") {
    last_position_of_x = current_position_of_x;
    last_position_of_y = current_position_of_y;
}

function clearArea()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}