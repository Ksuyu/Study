const DOM = {
  btnFind: document.querySelector(".btn-find"),
  inpArt: document.querySelector(".inp-artist"),
  slider: document.querySelector(".slide-track"),
  mask: document.querySelector(".container-mask"),
  artistFullName: document.querySelector(".artist-name"),
};

const URL = {
  artist:
    "https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=",
  object: "https://collectionapi.metmuseum.org/public/collection/v1/objects/",
};

const DATA = [];

const MAX_REQUESTS = 50;

DOM.btnFind.addEventListener("click", findArtist);

DOM.inpArt.addEventListener("keyup", function (e) {
  if (e.code === "Enter") {
    DOM.btnFind.click();
  }
});

async function findArtist() {
  loaderON();
  DOM.slider.innerHTML = "";
  const artistName = DOM.inpArt.value;
  const artistURL = `${URL.artist}${artistName}`;

  const r = await fetch(artistURL);
  const d = await r.json();

  console.log(d);
  const howTimes = d.total / MAX_REQUESTS;
  for (let i = 0; i <= howTimes; i++) {
    const from = i * MAX_REQUESTS;
    const to = from + MAX_REQUESTS;
    const next50 = d.objectIDs.slice(from, to);

    setTimeout(() => {
      console.log("REQUEST: ", i);
      makeMultiRequests(next50, artistName);
    }, i * 2000);
  }
}

async function makeMultiRequests(ids, artistName) {
  console.log(ids);
  const artistRE = new RegExp(artistName, "ig");
  const promises = ids.map((id) => {
    const objectURL = `${URL.object}${id}`;
    return fetch(objectURL).then((r) => r.json());
  });

  const datas = await Promise.all(promises);
  const datasFiltered = datas.filter(
    ({ artistDisplayName, primaryImageSmall }) =>
      artistRE.test(artistDisplayName) && primaryImageSmall
  );

  console.log(datas);
  console.log(datasFiltered);

  DOM.slider.innerHTML += datasFiltered.reduce(
    (html, art) => `${html}${render(art)}`,
    ""
  );
  DATA.push(...datasFiltered);

  DOM.inpArt.value = "";
  setArtistName();
  loaderOff();
}

function render({ primaryImageSmall, objectEndDate }) {
  return `
  <div class="picture slide">
    <img class="painting" src="${primaryImageSmall}" alt="...">
    <p class="details">Created in ${objectEndDate}</p>   
  </div>
    `;
}

function setArtistName() {
  DOM.artistFullName.innerHTML = DATA[0].artistDisplayName;
}

//loader

function loaderON() {
  DOM.mask.classList.remove("hide");
  DOM.mask.classList.remove("mask-absolute");
  DOM.mask.classList.add("mask");
}

function loaderOff() {
  DOM.mask.classList.add("hide");
  DOM.mask.classList.add("mask-absolute");
  DOM.mask.classList.remove("mask");
}
