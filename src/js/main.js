import burger from './module/burger.js';
import account from './module/account.js';
import sort from './module/sort.js';
import Swiper from 'swiper/bundle';

burger();
account();
sort();

const swiper = new Swiper('.collection__swiper', {
  slidesPerView: 'auto',
  spaceBetween: 20,
});

const fadeSwiper = new Swiper('.idea__swiper', {
  effect: 'fade',

  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
});
