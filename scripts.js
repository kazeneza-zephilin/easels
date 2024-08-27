const container = document.querySelector(".container");
const canva = document.createElement("div");
canva.style.cssText =
  "width:320px ;height:320px; display:flex; flex-wrap:wrap; justify-content: center; align-item:center; margin: 100px auto";
container.appendChild(canva);

for (let j = 0; j < 16 * 16; j++) {
  const pixel = document.createElement("div");
  pixel.style.cssText = "background-color: yellow; width:20px; height:20px";
  pixel.classList.add("square");
  canva.appendChild(pixel);
}

promptBtn = document.createElement("button");
promptBtn.style.cssText =
  "width:75px; height: 25px; margin: 50px 500px";
promptBtn.textContent = "add pixel";
container.appendChild(promptBtn);

function getPixel() {
  const popupDialog = document.createElement("div");
  const pixelNUmber = (popupDialog.textContent = prompt(
    "enter the number of pexel"
  ));
  return pixelNUmber;
}

function getNewGrid() {
  const pixelCount = getPixel();
  const numberOfDiv = parseInt(pixelCount) || 16;
  canva.innerHTML = "";
  const pixelSize = 320 / numberOfDiv;
  for (let i = 0; i < numberOfDiv * numberOfDiv; i++) {
    const pixel = document.createElement("div");
    pixel.style.cssText = `background-color: yellow; width:${pixelSize}px; height:${pixelSize}px`;
    pixel.classList.add("square");
    canva.appendChild(pixel);
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
      square.addEventListener("mouseover", (event) => {
        changeBackgroundColor(square);
      });
    });
  }
}

promptBtn.addEventListener("click", (event) => {
  getNewGrid();
});

const squares = document.querySelectorAll(".square");
squares.forEach((square) => {
  square.addEventListener("mouseover", (event) => {
    changeBackgroundColor(square);
  });
});
function changeBackgroundColor(elem) {
  elem.style.backgroundColor = "red";
}

function removeDivs() {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.parentNode.removeChild(square);
  });
}
