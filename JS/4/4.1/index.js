let image = document.getElementsByTagName("img")[0];
const imageSelector = document.getElementsByTagName("select")[0];
const photo= new Array();

photo["bridge"] = new Image(400,550);
photo["bridge"].src = "bridge.jpg";
photo["flowers"] = new Image(400,550);
photo["flowers"].src = "flowers.jpg";
photo["forest"] = new Image(400,550);
photo["forest"].src = "forest.jpg";
photo["lake"] = new Image(400,550);
photo["lake"].src = "lake.jpg";

imageSelector.addEventListener("change", function ({ target }) {
    const selectedElement = imageSelector.options[imageSelector.selectedIndex];
    const newImg = photo[selectedElement.getAttribute("name")];
    image.src = newImg.src;
});