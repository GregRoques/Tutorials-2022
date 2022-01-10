// === Grab our HTML elements
let output = document.getElementById("output");
let box = document.getElementById("box");
// initial animation values
let number = 0;
let xpos = 0;

function paint() {
  number++;
  output.textContent = number;
  if (number >= 300) return;
  requestAnimationFrame(paint); // must call recursively... don't need "window" as this already belongs to window object per last call
}

let previousTimeStamp = 0;
function move(timeStamp) {
  // timeStamp is automatically passed in requestAnimationFrame; passes high-resolution timeStamp in milli-seconds
  if (timeStamp) {
    let diff = timeStamp - previousTimeStamp;
    output.textContent = `${Math.round(diff)} milliseconds/frame`;
    previousTimeStamp = timeStamp;
  }
  xpos += 5;
  box.style.transform = `translateX(${xpos}px)`;
  let windowWidth = document.body.clientWidth - 100;

  if (xpos >= windowWidth) return;
  requestAnimationFrame(move);
}

// window.requestAnimationFrame(paint); // this is only called once
window.requestAnimationFrame(move); // this is only called once

// NOTE: requestAnimationFrame will PAUSE if your tab goes into the background
// (you click into another tab and out of the current one in which it is running)
