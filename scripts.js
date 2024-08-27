const container = document.querySelector(".container");
container.style.cssText =
  "width:320px ;height:320px; display:flex; flex-wrap:wrap; justify-content: center; align-item:center";

for (let j = 0; j < 16 * 16; j++) {
  const pixel = document.createElement("div");
  pixel.style.cssText = "background-color: blue; width:20px; height:20px";
  pixel.classList.add("square");
  container.appendChild(pixel);
}

const squares = document.querySelectorAll(".square");
squares.forEach((square) => {
  square.addEventListener("mouseover", (event) => {
    changeBackgroundColor(square);
  });
});
function changeBackgroundColor(elem) {
  elem.style.backgroundColor = "red";
}

promptBtn = document.createElement("button");
promptBtn.style.cssText = "width:75px; height: 25px; margin-top: 30px";
promptBtn.textContent = "add pixel";
container.appendChild(promptBtn);

function getPixel() {
  const popupDialog = document.createElement("div");
  const pixelNUmber = (popupDialog.textContent = prompt(
    "enter the number of pexel"
  ));
  return pixelNUmber;
}

promptBtn.addEventListener("click", (event) => {
  const pixelCount = getPixel();
});

console.log(pixelCount);