let fatherPixelsDraw = document.getElementById("pixel-board");
function pixelUnitDraw(father) {
  let pixelsDraw = document.createElement("div");
  pixelsDraw.style.border = "solid black 1px";
  pixelsDraw.style.width = "40px";
  pixelsDraw.style.height = "40px";
  pixelsDraw.style.display = "inline-block";
  pixelsDraw.style.background = "white";
  pixelsDraw.className = "pixel"
  father.appendChild(pixelsDraw);
}

let linesDraw = 5;
let rowsDraw = 5;


for (let indexL = 0; indexL < linesDraw; indexL++) {
  let lineDiv = document.createElement("div");
  lineDiv.className = "linesDraw";
  fatherPixelsDraw.appendChild(lineDiv);
  let lineDraw = document.getElementsByClassName("linesDraw")[indexL];
  for (let indexR = 0; indexR < rowsDraw; indexR++) {
    pixelUnitDraw(lineDraw);
  }
  
}

function changeSelection(event) {
  let whoClicked = event.target;
  let whoIsSelected = document.querySelector(".selected");
  whoIsSelected.classList.remove("selected");
  whoClicked.classList.add("selected");
}

function insertColorPixel(event) {
  let whoClicked = event.target;
  let selected = document.querySelector(".selected");
  let style = window.getComputedStyle(selected);
  let bkg = style.getPropertyValue("background-color");
  whoClicked.style.background = bkg;
  console.log();
  
}

let palletOptions = document.getElementsByClassName("color");

for (let index = 0; index < palletOptions.length; index++) {
  palletOptions[index].addEventListener("click", changeSelection);
  
}

let pixelBoard = document.getElementsByClassName("pixel");

for (let index = 0; index < pixelBoard.length; index++) {
  pixelBoard[index].addEventListener("click", insertColorPixel);
  
}






