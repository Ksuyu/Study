
  function ajax(url, callback){
    const aj = new XMLHttpRequest();
    aj.onload = () => {
      callback(aj.responseText);
    }
    
    aj.open('GET', url);
    
    aj.send();
  }
  
  const link = 'https://collectionapi.metmuseum.org/public/collection/v1/objects';
  let OBJS;
  let ids = [];
  const painting = document.querySelector('.painting');
  const button = document.querySelector('button-random');

function init(){
  ajax(link, (t) => {
      const r = JSON.parse(t);
      OBJS = r.objectIDs;
      // console.log(OBJS);
      getRandomArt();
    });
  }

// console.log(OBJS);


function getRandom(max){
  return Math.floor(Math.random() * max);
}

function getRandomArt(){
  let id = OBJS[getRandom(OBJS.length)];
  const url = `${ link }/${ id }`;
  ajax(url, (t) => {
    const r = JSON.parse(t);

      // if(r.classification = 'Drawings') { НЕ РАБОТАЕТ
        console.log(r);
        renderImage(r);
        setArtist(r);
      // }
  })
}

function setArtist(n){
  if(n.artistDisplayName == '') {
    document.querySelector('.artist-name').innerHTML = 'Unknown Artist';
  } else {
  document.querySelector('.artist-name').innerHTML = n.artistDisplayName;
}}

function renderImage(d){
  painting.src = d.primaryImageSmall;
  painting.setAttribute('alt', d.title);
  document.querySelector('.painting-year').innerHTML = d.period;

}


// function carousel(id) { 
//     for (let i = 0; i < 14; i++) {
//         if (ids[i] == id) {
//             return ids;
//         }
//     }
// }
// console.log(carousel());

document.querySelector('.button-random').addEventListener('click', getRandomArt);



init();


