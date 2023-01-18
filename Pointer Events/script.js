const video = document.querySelector(".video");

video.addEventListener("pointerdown", (e) => {
  console.log(e); // observe pointer event interface

  const dot = document.createElement("div");
  dot.classList.add("dot");
  dot.id = e.pointerId;
  positionDot(e, dot);
  document.body.append(dot);
});

video.addEventListener("pointermove", (e) => {
  const dot = document.getElementById(e.pointerId);
  if (dot == null) return;
  positionDot(e, dot);
});

video.addEventListener("pointerup", (e) => {
  const dot = document.getElementById(e.pointerId);
  if (dot == null) return;
  dot.remove();
});

video.addEventListener("pointercancel", (e) => {
  const dot = document.getElementById(e.pointerId);
  if (dot == null) return;
  dot.remove();
});

function positionDot(e, dot) {
  dot.style.width = `${e.width * 10}px`;
  dot.style.height = `${e.height * 10}px`;
  dot.style.left = `${e.pageX}px`;
  dot.style.top = `${e.pageY}px`;
}
