// ========== parent "App" function... controls element render and state management
const App = function App() {
  const currApp = document.getElementById("app");
  const { count, images } = App.state;

  const nextImages = images.slice(images.length - count, images.length);
  nextImages.forEach((image, index) => {
    // ========== create image
    const img = new Image();
    img.src = "https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif";
    img.title = `${images.length - count + index + 1}. ${image.name}`;
    img.alt = image.name;
    img.onload = imageLoaded(img, image.pic);

    // ========== create div
    const div = document.createElement("div");
    div.id = image.name;
    div.classList.add("pokemon");

    // ========== create image caption
    const text = document.createTextNode(image.name);

    // ==========  append image and text to div
    div.appendChild(img);
    div.appendChild(text);

    // ==========  append div to html element
    currApp.appendChild(div);

    // ==========  observe divs
    observer.observe(div);
  });
};

// ==========  app state
App.state = {
  count: 0,
  images: [],
  next: true,
};
// ==========  set State
App.setState = (pokemon) => {
  const prevImages = App.state.images;
  renderHtml(() => {
    App.state.count = pokemon.images.length;
    App.state.next = pokemon.next;
    App.state.images = [...prevImages, ...pokemon.images];
  });
};

// ==========  render new images when called from API
const renderHtml = (callback) => {
  callback();
  App();
};

// ========== display API image when loaded
const imageLoaded = (img, pokePic) => {
  setTimeout(() => {
    img.classList.add("imgLoaded");
    img.src = pokePic;
  }, 500);
};

// ========== Display Close Out Message &/or image when API calls are complete
const closeOutMessage = (img = "", text = "") => {
  if (!img && !text) return;

  const currApp = document.getElementById("app");

  const closeOutDiv = document.createElement("div");
  closeOutDiv.classList.add("closingDiv");

  if (img !== "") {
    const closeOutImg = new Image();
    closeOutImg.src = img;
    closeOutImg.alt = "Error";
    closeOutDiv.appendChild(closeOutImg);
  }

  if (text) {
    const closeOutText = document.createTextNode(text);
    closeOutDiv.appendChild(closeOutText);
  }

  currApp.appendChild(closeOutDiv);
  return;
};

// ========== remove Loading div from html when API calls are complete
const removeLoading = () => {
  const loading = document.getElementById("loading");
  loading.remove();
};

// ========== call additional images if available from API
const getMoreImages = (targetID) => {
  const { next, images } = App.state;
  if (next && targetID === images[images.length - 5].name) {
    getImages();
  }
  if (!next && targetID === images[images.length - 1].name) {
    // const closingImg =
    //   "https://uploads.dailydot.com/2019/05/detective-pikachu-dancing-meme.jpg?auto=compress%2Cformat&ixlib=php-3.3.0";
    const closingText = `${images.length} pokemon... You Got Em All`;
    removeLoading();
    closeOutMessage("", closingText);
  }
};

// ========== set Intersection Observer Settings
const imgOptions = { threshold: 1 };
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.toggle("show", entry.isIntersecting);
    getMoreImages(entry.target.id);
    observer.unobserve(entry.target);
  });
}, imgOptions);

// ========== call API
const getImages = () => {
  const imagesLength = App.state.images.length;
  const { setState } = App;

  const url = "http://localhost:2000/pokemon";
  const params = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      count: imagesLength,
    }),
  };
  fetch(url, params)
    .then((res) => res.json())
    .then((data) => {
      const pokemon = data;
      setState(pokemon);
    })
    .catch(() => {
      removeLoading();
      const closingImg =
        "https://storage.googleapis.com/gamebyte/2019/06/Pikachu-1.jpg";
      const closingText = "Error: Could Not Catch Any At All!";
      closeOutMessage(closingImg, closingText);
    });
};

// ========== scroll to top on page refresh
window.onbeforeunload = function () {
  // setState({ images: [], next: true });
  window.scrollTo(0, 0);
};

// ========== initiate on load
getImages();
