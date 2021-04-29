new Swiper('.image-slider',{

// Стрелки
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
   },
   mousewheel:{
      sensitivity: 1,
   },
   slidesPerView: 3,
   loop: true,
   speed: 700,
   // effect: 'fade',
   // direction: 'vertical',
   
});

VanillaTilt.init(document.querySelectorAll(".image-slider__image"), {
   max: 25,
   speed: 400
});
