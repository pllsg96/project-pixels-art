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
  whoClicked = event.target;
  whoIsSelected = document.querySelector(".selected");
  whoIsSelected.classList.remove("selected");
  whoClicked.classList.add("selected");
}

let color1 = document.getElementsByClassName("color")[0];
let color2 = document.getElementsByClassName("color")[1];
let color3 = document.getElementsByClassName("color")[2];
let color4 = document.getElementsByClassName("color")[3];

color1.addEventListener("click", changeSelection);
color2.addEventListener("click", changeSelection);
color3.addEventListener("click", changeSelection);
color4.addEventListener("click", changeSelection);

