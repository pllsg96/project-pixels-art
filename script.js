let fatherPixelsDraw = document.getElementById("pixelsSection");
function pixelUnitDraw(father) {
  let pixelsDraw = document.createElement("div");
  pixelsDraw.style.border = "solid black 1px";
  pixelsDraw.style.width = "25px";
  pixelsDraw.style.height = "25px";
  pixelsDraw.style.display = "inline-block";
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


