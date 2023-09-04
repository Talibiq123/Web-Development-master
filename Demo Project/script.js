// change background color randomly while clicking on a button~

const mainButton = document.querySelector("button");
const currentColor = document.querySelector(".currentColor")
const body = document.body;

function randomColorGenerator() { 
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const rendomColor =  `rgb(${red}, ${green}, ${blue})`;
    return rendomColor;
}

mainButton.addEventListener("click", () => {
    const rendomColor = randomColorGenerator();
    // console.log(rendomColor);
    body.style.background = rendomColor;
    currentColor.textContent = rendomColor;
});