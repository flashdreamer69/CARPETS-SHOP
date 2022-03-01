var swiper = new Swiper(".about-slider", {
 spaceBetween: 20,
  loop: true,
  centeredSlides: true,
  autoplay: {
     delay: 5500,
     disableOnInteraction: false,
  },
  breakpoints: {
    500: {
     slidesPerView: 2,
   },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});