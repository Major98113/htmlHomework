const submitButton = document.getElementsByClassName("submit_button")[0];
const countField = document.getElementsByClassName("count")[0];

countField.addEventListener("change", function ({ target : { value } }) {
    if (value > 0){
        submitButton.removeAttribute("disabled");
        return;
    }
    submitButton.setAttribute("disabled", "true");
});