//swiper logic
const swiper = new Swiper(".js-testiomonials-slider", {
  grabCursor: true,
  spaceBetween: 30,
  pagination: {
    el: ".js-testiomonials-pagination",
    clickable: true,
  },
  breakpoints: {
    767: {
      slidesPerView: 2,
    },
  },
});