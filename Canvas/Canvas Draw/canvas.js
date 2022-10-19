window.addEventListener("load", () => {
  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext("2d");

  // Resizing
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
  window.addEventListener("resize", () => {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
  });

  // ========================================================== Adding Shapes

  //ctx.fillRect(100, 100, 200, 200);

  //   ctx.strokeStyle = "red";
  //   ctx.lineWidth = 5;
  //   ctx.strokeRect(100, 100, 200, 500);

  //   ctx.strokeStyle = "blue";
  //   ctx.lineWidth = 2;
  //   ctx.strokeRect(200, 200, 200, 500);

  // ========================================================== Drawing Lines

  //  ctx.beginPath();
  //    ctx.moveTo(100, 100);
  //    ctx.lineTo(200, 100);
  //    ctx.lineTo(200, 150);
  //    ctx.closePath(); // closes between start and end point [into a triangle in this case];
  //    ctx.stroke();

  // ========================================================== Painting

  let painting = false;

  function startPosition(e) {
    painting = true;
    draw(e);
  }

  function endPosition() {
    painting = false;
    ctx.beginPath(); // don't want to close paths two points at conclusion... want to start a new path;
  }

  function draw(e) {
    if (!painting) return;

    ctx.lineWidth = 10;
    ctx.lineCap = "round";
    ctx.strokeStyle = "blue";

    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
  }

  canvas.addEventListener("mousedown", startPosition);
  canvas.addEventListener("mouseup", endPosition);
  canvas.addEventListener("mousemove", draw);
});
