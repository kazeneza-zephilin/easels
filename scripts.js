useRandomColor = false;

document.addEventListener("DOMContentLoaded", (event) => {
  const rangeInput = document.querySelector("#rangeInput");
  const rangeValue = document.querySelector("#rangeValue");
  const container = document.querySelector(".container");
  const canva = document.createElement("div");
  const rainbowBtn = document.querySelector("#rainbow");

  canva.style.cssText =
    "width:320px ;height:320px; display:flex; flex-wrap:wrap; justify-content: center; align-item:center; margin: 100px auto";
  container.appendChild(canva);

  function getNewGrid(size) {
    canva.innerHTML = "";
    const pixelSize = 320 / size;

    for (let i = 0; i < size * size; i++) {
      const pixel = document.createElement("div");
      pixel.style.cssText = `background-color: white; width:${pixelSize}px; height:${pixelSize}px`;
      pixel.classList.add("square");
      canva.appendChild(pixel);
    }

    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
      square.addEventListener("mouseover", (event) => {
        changeBackgroundColor(square);
      });
    });
  }

  function handleInputChange() {
    const newSize = parseInt(rangeInput.value, 10);
    rangeValue.textContent = newSize;
    getNewGrid(newSize);
  }

  handleInputChange();

  rangeInput.addEventListener("input", handleInputChange);

  function changeBackgroundColor(elem) {
    elem.style.backgroundColor = getColor();
  }
  function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function getColor() {
    return useRandomColor ? generateRandomColor() : "black";
  }
  rainbowBtn.addEventListener("click", (e) => {
    e.target.style.backgroundColor = 'yellow'
    e.target.style.color = 'black'
    useRandomColor = !useRandomColor;
  }, true);
});
