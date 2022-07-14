const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  centeredSlides: false,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2, //브라우저가 768보다 클 때
      spaceBetween: 50,
    },
    1024: {
      slidesPerView: 3, //브라우저가 1024보다 클 때
      spaceBetween: 60,
    },
  },
});
