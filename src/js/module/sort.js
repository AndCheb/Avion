const button = document.querySelectorAll('.products__button');
const sublist = document.querySelectorAll('.products__sublist');
const arrow = document.querySelectorAll('.arrow');

let currentButton;

button.forEach((item, index) => {
  item.addEventListener('click', (e) => {
    currentButton = e.currentTarget;
    sublist.forEach((item) => {
      if (item !== sublist[index]) {
        item.classList.remove('products__sublist--visible');
      }
    });
    arrow.forEach((item) => {
      if (item !== arrow[index]) {
        item.classList.remove('arrow-rotate');
      }
    });
    arrow[index].classList.toggle('arrow-rotate');
    sublist[index].classList.toggle('products__sublist--visible');
  });
});

export default function () {
  document.addEventListener('click', (e) => {
    if (e.target !== currentButton) {
      sublist.forEach((item, index) => {
        item.classList.remove('products__sublist--visible');
        arrow[index].classList.remove('arrow-rotate');
      });
    }
  });
}
