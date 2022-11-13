// const link = 'https://collectionapi.metmuseum.org/public/collection/v1/objects';
// const link_id = (id) => `${link}/${id}`;
// const painting = document.getElementById('painting');
// const button = document.querySelector('button-random');



// let objectIDs;

// fetch(link).then(response => response.json()).then(data => pic(data));

// function getRandom(max){
//   return Math.floor(Math.random() * max);
// }

// const pic = (data) => {

//   painting.src = data.primaryImage;

// }




// fetch(link).then(response => response.json()).then(console.log);

// function getRandom(max){
  //   return Math.floor(Math.random() * max);
  // }
  



// -----
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
  const painting = document.querySelector('.painting');
  const button = document.querySelector('button-random');

function init(){
  ajax(link, (t) => {
      const r = JSON.parse(t);
      OBJS = r.objectIDs;

      getRandomArt();
    });
  }

console.log(OBJS);



function getRandom(max){
  return Math.floor(Math.random() * max);
}

function getRandomArt(){
  const id = OBJS[getRandom(OBJS.length)];
  const url = `${ link }/${ id }`;
  ajax(url, (t) => {
      const r = JSON.parse(t);
    
      if (r.artistDisplayName != "" && r.primaryImageSmall != "") { //тормозит проверка
        console.log(r);
        renderImage(r);
        setArtist(r);

      };
  })
}

function setArtist(n){
  document.querySelector('.artist-name').innerHTML = n.artistDisplayName;
}


function renderImage(d){
  painting.src = d.primaryImageSmall;
  painting.setAttribute('alt', d.title);
}

document.querySelector('.button-random').addEventListener('click', getRandomArt);



init();




// function ajaxPOST(url, data, callback){
//     const aj = new XMLHttpRequest();
//     aj.onload = () => {
//         callback(aj.responseText);
//     }

//     aj.open('POST', url);
//     aj.setRequestHeader('Content-Type', 'multipart/form-data; boundary=something');

//     aj.send(data);
// }

// // const urlShort = 'https://cleanuri.com/api/v1/shorten';
// // const dataShort = 'url=https://github.com/so2niko-students/FE22-1/blob/j19/README.md';
// // ajaxPOST(urlShort, dataShort, (d) => {
// //     console.log(d);
// // });

// // -------