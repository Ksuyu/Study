document.addEventListener('DOMContentLoaded', function() {

const showSlider = new Swiper('.music-player-carousel', {
  loop: true,
  slidesPerView: 3,
  speed: 1800


//   observer: true,
// observeParents: true,

})



document.querySelector('video').playbackRate = 2
}) 