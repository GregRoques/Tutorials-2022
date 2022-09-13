const button = document.querySelector("button");

button.addEventListener("click", () => {
  Notification.requestPermission().then((perm) => {
    if (perm === "granted") {
      const notification = new Notification("Example Notification", {
        body: Math.random(),
        data: { hello: "world" }, // if you want to pass data
        icon:
          "https://www.dreamstime.com/cute-cat-face-outline-icon-vector-illustration-image148856151",
        tag: "Welcome Message", // allows for over-riding former tab
      });

      notification.addEventListener("close", (e) => {
        alert(e);
      });
    }
  });
});

let notification;
let interval;
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    const leaveDate = new Date();
    interval = setInterval(() => {
      notification = new Notification("PLLLEEEAAASSSEEEE Come Back!!!", {
        body: `You have been gone for ${
          Math.round(new Date() - leaveDate) / 1000
        } seconds`,
        icon:
          "https://www.dreamstime.com/cute-cat-face-outline-icon-vector-illustration-image148856151",
        tag: "Come Back",
      }); // calls notification when needed;
    }, 100);
  } else {
    if (notification) notification.close();
    if (interval) clearInterval(interval);
    //closes notification when visibility returns;
  }
});
