
const notification = document.querySelector(".notification");
const btn = document.querySelector(".button-start");
const cloudsAnimation = document.querySelector(".clouds");
const dino = document.querySelector(".dino");


btn.onclick = function () { 
  cloudsAnimation.style.animation = 'animatedClouds 500s linear infinite'; 
  notification.classList.add("hide");
}