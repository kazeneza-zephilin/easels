const container = document.querySelector(".container");
container.style.cssText =
  "width:320px ;height:320px; display:flex; flex-wrap:wrap";

for (let j = 0; j < 16 * 16; j++) {
  const pixel = document.createElement("div");
  pixel.style.cssText = "background-color: gray; width:20px; height:20px";
  pixel.classList.add("square");
  container.appendChild(pixel);
}
const square = document.querySelector(".square");
function changeBackground (elem){
    elem.style.cssText = 'background-color: yellow'
}
square.addEventListener('mauseenter', ()=> {
    changeBackground(square)
})