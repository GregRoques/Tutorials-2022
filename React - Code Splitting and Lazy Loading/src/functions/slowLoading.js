export default function wait(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
} // simulate download loading time on large page
