//ハンバーガーメニュー
class MenuOpen {
  constructor(menu, nav) {
    this.DOM = {}
    this.DOM.menu = document.querySelector(menu);
    this.DOM.nav = document.querySelector(nav);
    this.DOM.body = document.querySelector('body')
    this._toggle(this.DOM.nav, this.DOM.body);
  }
  
  _toggle(el, noScroll) {
    this.DOM.menu.addEventListener('click', function(){
      this.classList.toggle('inview');
      el.classList.toggle('inview');
      noScroll.classList.toggle('noScroll');
    });
  }
}

const menu = new MenuOpen('.humburger', '.nav-area');

const items = document.querySelectorAll('.menu-list__item');

items.forEach(function(item){
      item.addEventListener('click', function(){
        menu.DOM.menu.classList.remove('inview');
        menu.DOM.nav.classList.remove('inview');
        menu.DOM.body.classList.remove('noScroll');
      })
    })

//swiper.js
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  effect: 'coverflow',
  slidesPerView: 1,
  centeredSlides: true,
  grabCursor: true,
  speed: 1500,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  
  breakpoints: {
    1000: {
      slidesPerView: 2,
    }
  },

});