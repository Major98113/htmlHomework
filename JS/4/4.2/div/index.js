const drawField = document.getElementById("draw_field");


function drawEllipse(a, b) { //0.2
    for ( let t = 0; t <= 2 * Math.PI; t += 0.01 ){
        let x = a * Math.cos(t);
        let y = b * Math.sin(t);

        const point = document.createElement("DIV");
        point.classList.add("point");
        point.style.left = `${250 + x}px`;
        point.style.top = `${250 + y}px`;
        //console.log(x, y);
        if (x==-0.5972445280843733  ){
            console.log(x, y);
            point.style.width = `${250 + y}px`;
        }
        drawField.appendChild(point);
    }
};

drawEllipse(250, 250);