
let wrapper = document.querySelector('.wrapper');
let pageSlider = new Swiper('.page',{
   wrapperClass: "page__wrapper",
   slideClass: "page__screen",

   direction: 'vertical',
   slidesPerView: 'auto',
   parallax: true,

   // Управление клавой
   keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
   },

   // Управление колесом мышки
   mousewheel: {
      sensitivity: 1,
   },

   watchOverflow: true,
   speed: 800,

   // Обновление свайпера при изменении элементов слайдера
   observer: true,
   observeParents: true,
   observeSlideChildren: true,

   // Навигация (элементы управления)
   pagination: {
      el: '.page__pagignation',
      type: 'bullets',
      clickable: true,
      bulletClass: "page__bullet",
      bulletActiveClass: "page__bullet_active",
   },
   // Скролл
   scrollbar: {
      el: '.page__scroll',
      dragClass: "page__drag-scroll",
      draggable: true
   },

   init: false,

   // События
   on: {
      init: function(){
         menuSlider();
         wrapper.classList.add('_loaded')
      },
      slideChange: function(){
         menuSliderRemove();
         menuLinks[pageSlider.realIndex].classList.add('_active');
      },
   },
});

let menuLinks = document.querySelectorAll('.menu__link');

function menuSlider(){
   if (menuLinks.length > 0){
      menuLinks[pageSlider.realIndex].classList.add('_active');
      for (let index = 0; index < menuLinks.length; index++){
         const menuLink = menuLinks[index];
         menuLink.addEventListener("click", function(e){
            menuSliderRemove();
            pageSlider.slideTo(index, 800);
            menuLink.classList.add('_active');
            e.preventDefault();
         });
      }
   }
}

function menuSliderRemove(){
   let menuLinkActive = document.querySelector('.menu__link._active');
   if (menuLinkActive){
      menuLinkActive.classList.remove('_active');
   }
}

pageSlider.init();