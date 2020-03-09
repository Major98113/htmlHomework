const SECOND_OPTION_CLASSNAME = "second-option";
const THIRD_OPTION_CLASSNAME = "third-option";
const FORTH_OPTION_CLASSNAME = "forth-option";
const secondOption = document.getElementsByClassName(SECOND_OPTION_CLASSNAME)[0];
const thirdOption = document.getElementsByClassName(THIRD_OPTION_CLASSNAME)[0];
const forthOption = document.getElementsByClassName(FORTH_OPTION_CLASSNAME)[0];

function changeSecondCurrentStyles(event){
    const styles = event.target.style;
    const isActive = this.getAttribute("isChanged");

    if (isActive){
        this.removeAttribute("isChanged");
        styles.fontSize = "";
        styles.color = "";
        styles.backgroundColor = "";
        return;
    }

    this.setAttribute("isChanged", true);
    styles.fontSize = "48pt";
    styles.color = "white";
    styles.backgroundColor = "aqua";

}

function changeThirdCurrentStyles(event, isMouseDown){
    const styles = event.target.style;

    if (isMouseDown){
        styles.backgroundColor = "green";
        return;
    }
    styles.backgroundColor = "yellow";
}

function changeForthMouseOverCurrentStyles(event){
    const styles = event.target.style;
    styles.backgroundColor = "red";
}

function changeForthMouseOutCurrentStyles(event){
    const styles = event.target.style;
    styles.backgroundColor = "aqua";
}

secondOption.addEventListener("click", function(event) {
    changeSecondCurrentStyles.bind(this)(event);
});

thirdOption.addEventListener("mousedown", (event) => changeThirdCurrentStyles(event, true));
thirdOption.addEventListener("mouseup", (event) => changeThirdCurrentStyles(event, false));

forthOption.addEventListener("mouseover", changeForthMouseOverCurrentStyles);
forthOption.addEventListener("mouseout", changeForthMouseOutCurrentStyles);