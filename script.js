let palletOptions = document.getElementsByClassName("color");
let pixelBoard = document.getElementsByClassName("pixel");
let buttonSelection = document.getElementById("clear-board");
let fatherPixelsDraw = document.getElementById("pixel-board");
let boardGenerateButton = document.getElementById("generate-board");
let inputSizeBoard = document.getElementById("board-size");
let clearLines = document.getElementsByClassName("linesDraw");
let drawLines = 5;
let drawRows = 5;
boardGenerateButton.addEventListener("click", checkSize);
buttonSelection.addEventListener("click", clearAllBoard);
randomColors();

function randomColors() {
  let colorRandom = document.getElementsByClassName("color");
  for (let index = 14; index < colorRandom.length; index++) {
    var randColor = Math.floor(Math.random() * 16777215).toString(16);
    colorRandom[index].style.backgroundColor = "#" + randColor;
  }
}


// Funtion to see if the input is empty
function checkSize() {
  let valor = (inputSizeBoard.value); 
  if (valor.length === 0) {
    alert("Board inválido!")
  }
  else {
    removeAllPixels();
    let value = document.getElementById("board-size").value;
    generatePixels(value, value);
    checkIfNeedColor();
  }
}

function removeAllPixels() {
  while (fatherPixelsDraw.lastChild){
    fatherPixelsDraw.removeChild(fatherPixelsDraw.lastChild);
  }
}

// Function to create a unit pixel
function pixelUnitDraw(father) {
  let pixelsDraw = document.createElement("div");
  pixelsDraw.style.border = "solid black 1px";
  pixelsDraw.style.width = "40px";
  pixelsDraw.style.height = "40px";
  pixelsDraw.style.borderRadius = "20%";
  pixelsDraw.style.display = "inline-block";
  pixelsDraw.style.background = "white";
  pixelsDraw.className = "pixel"
  father.appendChild(pixelsDraw);
}
//((howManyLinesDraw >= 5 && howManyLinesDraw <= 50) ||
//(howManyRowsDraw >= 5 && howManyRowsDraw <= 50))

generatePixels(drawLines, drawRows);

// for to generate selected quantity of pixels in board when start
function generatePixels(howManyLinesDraw, howManyRowsDraw) {
  if (howManyLinesDraw < 5) {
    howManyLinesDraw = 5;
  }
  if (howManyRowsDraw < 5) {
    howManyRowsDraw = 5;
  }
  if (howManyLinesDraw > 50) {
    howManyLinesDraw = 50;
  }
  if (howManyRowsDraw > 50) {
    howManyRowsDraw = 50;
  }
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
checkIfNeedColor();
function checkIfNeedColor() {
  for (let index = 0; index < pixelBoard.length; index++) {
    pixelBoard[index].addEventListener("click", insertColorPixel);
  }  
}

