const title = document?.querySelector('.envelope__title');
const increase = document?.querySelector('.amount__increase');
const decrease = document?.querySelector('.amount__decrease');
const total = document?.querySelector('.amount__total');
const addToCard = document?.querySelector('.amount__button');

const goods = title?.attributes.id.nodeValue;
let count = 1;

export default function() {
  increase?.addEventListener('click', () => {
    count++;
    total.textContent = count;
  });

  decrease?.addEventListener('click', () => {
    if (count < 2) {
      count = 1;
    } else {
      count--;
    }

    total.textContent = count;
  });

  addToCard?.addEventListener('click', () => {
    localStorage.setItem(goods, count);
  });
}
