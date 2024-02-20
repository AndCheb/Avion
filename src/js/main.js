import burger from './module/burger.js';
import account from './module/account.js';
import Swiper from 'swiper/bundle';

burger();
account();

const swiper = new Swiper('.swiper', {
  slidesPerView: 'auto',
  spaceBetween: 20,
});
