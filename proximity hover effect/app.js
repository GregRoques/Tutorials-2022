document.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const anchor = document.getElementById("anchor");
  const rekt = anchor.getBoundingClientRect();

  const anchorX = rekt.left + rekt.width / 2;
  const anchorY = rekt.top + rekt.height / 2;

  const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);
  //console.log(angleDeg);
  const eyes = document.querySelectorAll(".eye");
  eyes.forEach((eye) => {
    eye.style.transform = `rotate(${90 + angleDeg}deg)`;
    anchor.style.filter = `hue-rotate(${angleDeg}deg)`; //changes hue as mouse moves
  });
});

function angle(cx, cy, ex, ey) {
  const degreeY = ey - cy;
  const degreeX = ex - cx;
  const radius = Math.atan2(degreeY, degreeX);
  //The Math.atan2() method measures the counterclockwise angle θ, in radians, between the positive x-axis and the point (x, y).
  // Note that the arguments to this function pass the y-coordinate first and the x-coordinate second.
  const degree = (radius * 180) / Math.PI;
  //Math.PI property represents the ratio of the circumference of a circle to its diameter, approximately 3.14159
  return degree;
}
