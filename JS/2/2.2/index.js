const paragraphElement = document.getElementsByClassName("img_description")[0];
const styles = {
    "P": {
        prevText: paragraphElement.innerText,
        nextText: "Second",
        prevBackgroundColor: "",
        nextBackgroundColor: "red"
    },
    "IMG": {
        prevSrc: "first_cat.jpg",
        nextSrc: "second_cat.jpg"
    }
};


function commonEventHandler({ target }) {
    if (target.tagName === "P"){
        paragraphClickHandler(target);
        return;
    }
    imageClickHandler(target);
}

function paragraphClickHandler({ style }) {
    if (style.backgroundColor === styles["P"].prevBackgroundColor){
        style.backgroundColor = styles["P"].nextBackgroundColor;
        return;
    }
    style.backgroundColor = styles["P"].prevBackgroundColor;
}

function imageClickHandler(target) {
    if (target.src.match(styles["IMG"].prevSrc)){
        paragraphElement.innerText = styles["P"].nextText;
        target.src = styles["IMG"].nextSrc;
        return;
    }

    paragraphElement.innerText = styles["P"].prevText;
    target.src = styles["IMG"].prevSrc;

}