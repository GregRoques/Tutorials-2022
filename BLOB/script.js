async function catFormSubmit(e) {
  e.preventDefault();
  const elements = e.target.elements;
  let labels = [];
  let cats = {
    1: [],
    2: [],
  };
  Object.values(elements).forEach((elem) => {
    if (elem.tagName === "INPUT" && elem.id.toLowerCase().includes("name")) {
      const label = elem.labels[0].outerText;

      if (!labels.includes(label)) {
        labels.push(label);
      }
      var idNum = elem.id.slice(elem.id.length - 1, elem.id.length);
      const value = !elem.value ? "EMPTY_FIELD" : elem.value;
      cats[idNum].push(value);
    }
  });
  let data = `${labels.toString()}
  ${cats[1].toString()}
  ${cats[2].toString()}
  `;
  const blob = new Blob([data.toString()], { type: "octet-stream" });
  // first parameter must be an array
  // for the "type", "octet-stream" is a binary file

  const href = URL.createObjectURL(blob);
  // create a download url scoped to our domain
  // url stays in url forever unless we remove it.

  const a = Object.assign(document.createElement("a"), {
    href,
    style: "display:none",
    download: "catsData.csv", //allows doc to be downloaded... value is name for download
  }); // create download file and assign values to object

  document.body.appendChild(a);

  a.click(clearbrowser()); // simulates a browser click on our hidden download element('a');
  URL.revokeObjectURL(href); //deletes href link for download
  a.remove(); // removes hidden element... there is not longer a working href, so it is pointless to keep unless we generate a new one with a new href
}

const clearbrowser = () => {
  setTimeout(() => {
    const inputs = document.getElementsByTagName("input");
    // console.log(inputs);
    Object.values(inputs).map((input) => {
      input.value = "";
    });
  }, 1000);
};
