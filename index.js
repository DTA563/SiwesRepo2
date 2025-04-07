const changeText = document.getElementById("text");

function fontChange() {
    // console.log("Font size changed");
    const fontSize = document.getElementById("font-size").value;
    const fontSizeNumber = Number(fontSize);

    changeText.style.fontSize = fontSizeNumber + "px";
}

function fontColorChange() {
    // console.log("Font color changed");
    const colorChangeInput = document.getElementById("colorChangeInput").value;

    changeText.style.color = colorChangeInput;
}

function borderChange() {
    // console.log("Border size changed");
    const borderSize = document.getElementById("border-size").value;
    const borderColor = document.getElementById("border-color").value;
    const borderSizeNumber = Number(borderSize);

    changeText.style.border = borderSizeNumber + "px solid " + borderColor;
}

function backgroundColorChange() {
    // console.log("Background color changed");
    const backgroundColorInput = document.getElementById("backgroundColorInput").value;

    changeText.style.backgroundColor = backgroundColorInput;
}

function allStyle(){
    fontChange();
    fontColorChange();
    borderChange();
    backgroundColorChange();
}

const submitAll = document.getElementById("submit");
submitAll.addEventListener('click', allStyle);