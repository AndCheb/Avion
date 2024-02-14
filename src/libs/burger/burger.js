export default function () {
  const body = document.body;
  const menuNav = document.querySelector('.menu__nav');
  const menuList = document.querySelector('.menu__list');
  const menuButton = document.querySelector('.menu__button');

  function burgerClose() {
    menuButton.classList.remove('menu__button--active');
    menuNav.classList.remove('menu__nav--open');
    body.classList.remove('scroll-none');
  }

  function burgerToggle() {
    menuButton.classList.toggle('menu__button--active');
    menuNav.classList.toggle('menu__nav--open');
    body.classList.toggle('scroll-none');
  }

  menuButton.addEventListener('click', burgerToggle);

  menuList.addEventListener('click', (e) => {
    if (e.target.classList.contains('menu__link')) {
      burgerClose();
    }
  });
}
