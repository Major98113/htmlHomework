const drawField = document.getElementById("draw_field");
const summitButton = document.getElementsByClassName("submit")[0];
const clearButton = document.getElementsByClassName("clear")[0];
const paramX = document.getElementsByClassName("param_x")[0];
const paramY = document.getElementsByClassName("param_y")[0];

function drawEllipse(a, b) {
    for ( let t = 0; t <= 2 * Math.PI; t += 0.01 ){
        const point = document.createElement("DIV");
        let x = a * Math.cos(t);
        let y = b * Math.sin(t);

        point.classList.add("point");
        point.style.left = `${250 + x}px`;
        point.style.top = `${250 + y}px`;
        drawField.appendChild(point);
    }
}

function clearField() {
    drawField.innerHTML = "";
}

summitButton.addEventListener("click", function (event) {
    drawEllipse(Number(paramX.value), Number(paramY.value));
});

clearButton.addEventListener("click", clearField);

drawEllipse(200, 200);