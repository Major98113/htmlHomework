const angleField = document.getElementsByClassName("angle")[0];
const functionSelector = document.getElementsByClassName("function_selector")[0];
const solveButton = document.getElementsByClassName("solve_button")[0];
const resultField = document.getElementsByClassName("result")[0];

solveButton.addEventListener("click",  function(event) {
    const radian = angleField.value * Math.PI/180;
    const executeFunction = functionSelector.options[functionSelector.selectedIndex].classList[0];
    const resultOfExecution = eval(`Math.${executeFunction}(${radian})`);
    resultField.innerText = `${executeFunction}(${angleField.value}) = ${resultOfExecution}`;
});