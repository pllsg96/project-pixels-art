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



