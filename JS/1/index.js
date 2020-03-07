const h2Element = document.getElementById("h2Element");
const divElement = document.getElementById("divElement");
const pElement = getSecondElementLink();
const DEFAULT_TEXT_COLOR = "black";
const DEFAULT_SECOND_ELEMENT_COLOR = "red";
const DEFAULT_BACKGROUND_COLOR = "yellow";
const DEFAULT_SECOND_ELEMENT__BACKGROUND_COLOR = "white";

function getSecondElementLink() {
    for( let i=0; i<document.all.length;i++){
        if (document.all[i].tagName === "P")
            return document.all[i];
    }
}

function changeFirstAndLastElementsStyles(event){
    const colorText = event.target.style.color || DEFAULT_TEXT_COLOR;
    if (colorText === DEFAULT_TEXT_COLOR){
        this.style.color = "white";
        this.style.backgroundColor = "blue";
    }
    else {
        this.style.color = DEFAULT_TEXT_COLOR;
        this.style.backgroundColor = DEFAULT_BACKGROUND_COLOR;
    }
}

function changeSecondElementStyle(event){
    const colorText = event.target.style.color || DEFAULT_SECOND_ELEMENT_COLOR;
    if (colorText === DEFAULT_SECOND_ELEMENT_COLOR){
        this.style.color = "white";
        this.style.backgroundColor = "green";
    }
    else {
        this.style.color = DEFAULT_SECOND_ELEMENT_COLOR;
        this.style.backgroundColor = DEFAULT_SECOND_ELEMENT__BACKGROUND_COLOR;
    }
}

h2Element.addEventListener("click", changeFirstAndLastElementsStyles);
divElement.addEventListener("click", changeFirstAndLastElementsStyles);
pElement.addEventListener("click", changeSecondElementStyle);