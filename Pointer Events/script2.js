const timeline = document.querySelector(".timeline");

timeline.addEventListener("pointerdown", (e) => {
  timeline.setPointerCapture(e.pointerId); // sets it so that ALL pointer events that happen on our screen happen on our timeline
  setTimelinePosition(e);

  timeline.addEventListener("pointermove", setTimelinePosition);
  timeline.addEventListener(
    "pointerup",
    (e) => {
      //timeline.releasePointerCapture(e.pointerId); ... no need for this, as it is done by default; just showing it so you remember it exists and is happening
      timeline.removeEventListener("pointermove", setTimelinePosition);
    },
    { once: true }
  );
});

function setTimelinePosition(e) {
  const rect = e.target.getBoundingClientRect();
  timeline.style.setProperty(
    "--handle-position",
    `${(e.clientX / rect.width) * 100}%`
  );
}
