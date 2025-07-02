// ------Slideri hamar

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
});

// ----------Slider 12 Section--------
var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    500: {
      slidesPerView: 1,
      spaceBetweenSlides: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetweenSlides: 30,
    },
    1200: {
      slidesPerView: 3,
      spaceBetweenSlides: 40,
    },
  },
 
});

let hamburger = document.querySelector(".hamburger");
let nav = document.querySelector(".container1 nav");
let container1 = document.querySelector(".container1");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
  nav.classList.toggle("container1Nav_toggle");
});
