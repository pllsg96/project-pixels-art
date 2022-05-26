let howManyLinesDraw = 5;
let howManyRowsDraw = 5;
let palletOptions = document.getElementsByClassName("color");
let pixelBoard = document.getElementsByClassName("pixel");
let buttonSelection = document.getElementById("clear-board");
let fatherPixelsDraw = document.getElementById("pixel-board");
let boardGenerateButton = document.getElementById("generate-board");
let inputSizeBoard = document.getElementById("board-size");
let clearLines = document.getElementsByClassName("linesDraw");

boardGenerateButton.addEventListener("click", checkSize);





// Function to create a unit pixel
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

generatePixels();
// for to generate selected quantity of pixels in board when start
function generatePixels() {
  for (let indexL = 0; indexL < howManyLinesDraw; indexL++) {
    let lineDiv = document.createElement("div");
    lineDiv.className = "linesDraw";
    fatherPixelsDraw.appendChild(lineDiv);
    let lineDraw = document.getElementsByClassName("linesDraw")[indexL];
    for (let indexR = 0; indexR < howManyRowsDraw; indexR++) {
      pixelUnitDraw(lineDraw);
    } 
  }
}


// Function to change the class selected to another color in pallet
function changeSelection(event) {
  let whoClicked = event.target;
  let whoIsSelected = document.querySelector(".selected");
  whoIsSelected.classList.remove("selected");
  whoClicked.classList.add("selected");
}

// Function to insert the selected color to clicked pixel
function insertColorPixel(event) {
  let whoClicked = event.target;
  let selected = document.querySelector(".selected");
  let style = window.getComputedStyle(selected);
  let bkg = style.getPropertyValue("background-color");
  whoClicked.style.background = bkg;
}

// Function to clear all board
function clearAllBoard() {
  for (let index = 0; index < pixelBoard.length; index++) {
    pixelBoard[index].style.background = "white";
  }
}

// for to go through to check if any color of pallete were clicked
for (let index = 0; index < palletOptions.length; index++) {
  palletOptions[index].addEventListener("click", changeSelection);
}

// for to go through if any pixel's board were clicked
for (let index = 0; index < pixelBoard.length; index++) {
  pixelBoard[index].addEventListener("click", insertColorPixel);
}

buttonSelection.addEventListener("click", clearAllBoard);

function checkSize() {
  let valor = (inputSizeBoard.value); 
  if (valor.length === 0) {
    alert("Board inválido!")
  }
  else {

  }
}








