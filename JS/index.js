window.addEventListener('DOMContentLoaded', function(){

  // СЛАЙДЕР
  const swiper = new Swiper('.swiper', {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },

  });

  //ТАБЫ

  let tabsBtn = document.querySelectorAll('.how__list_link');
  let tabsItem = document.querySelectorAll('.how__blok');

  tabsBtn.forEach(function(ele) {
      ele.addEventListener('click',function(e){
          const path = e.currentTarget.dataset.path;

          tabsBtn.forEach(function(btn){ btn.classList.remove('how__list_link--active')});
          e.currentTarget.classList.add('how__list_link--active');

          tabsItem.forEach(function(element){ element.classList.remove('tab-content--active')});
          document.querySelector(`[data-target="${path}"]`).classList.add('tab-content--active')
      });
  });

  // АККАРДИОН
  new Accordion('.accordion-container');

  // БУРГЕР

  const BurgerBtn = document.querySelector('.header__burger')
  const menuClosed = document.querySelector('.menu__closed')
  const menuBurger = document.querySelector('.burger-menu__heder')

  BurgerBtn.addEventListener('click', function(){
    menuBurger.classList.add('burger-menu__heder--active')
   });

   menuClosed.addEventListener('click', function(){
    menuBurger.classList.remove('burger-menu__heder--active')
   });

  //  ПОИСК

    const sarchBtn = document.querySelector('.nav__list__link_img')
    const sarcClosed = document.querySelector('.seauch__closed')
    const sarch = document.querySelector('.search')

    sarchBtn.addEventListener('click', function(){
      sarch.classList.add('search--aktive')
     });

     sarcClosed.addEventListener('click', function(){
      sarch.classList.remove('search--aktive')
     });
})

