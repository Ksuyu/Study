document.addEventListener('DOMContentLoaded', function() {

const showSlider = new Swiper('.music-player-carousel', {
  loop: true,
  slidesPerView: 3,
  speed: 1500,
  centeredSlides: true,
  navigation: {
    nextEl: '.music-player-navigation__next',
    prevEl: '.music-player-navigation__prev'


  }


//   observer: true,
// observeParents: true,

})



document.querySelector('video').playbackRate = 2
}) 