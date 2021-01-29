var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
color = "black";
width_of_the_line = 1;
canvas.addEventListener("mousedown", my_mousedown);
canvas.addEventListener("mouseleave", my_mouseleave);
canvas.addEventListener("mouseup", my_mouseup);
canvas.addEventListener("mousemove", my_mousemove);

function my_mousedown(e) {
    color = document.getElementById("color").value
    width_of_the_line = document.getElementById("width_of_the_line").value;

    mouseEvent = "mouseDown";
}

function my_mouseleave(e) {
    mouseEvent = "mouseleave";
}

function my_mouseup(e) {
    mouseEvent = "mouseUP"
}

function my_mousemove(e) {
    current_position_of_the_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_the_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_the_line;

        console.log("Last_position_of_x_and_y_coordinates= ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current_position_of_x_and_y_coordinates")
        console.log("x = " + current_position_of_the_mouse_x + "y = " + current_position_of_the_mouse_y);
        ctx.lineTo(current_position_of_the_mouse_x, current_position_of_the_mouse_y);
        ctx.stroke();
    }

    last_position_of_x = current_position_of_the_mouse_x
    last_position_of_y = current_position_of_the_mouse_y

}

function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}