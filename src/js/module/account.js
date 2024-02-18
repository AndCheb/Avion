const form = document.querySelector('.header__login');
const exit = document.querySelector('.header__log-out');
const account = document.querySelector('.header__button');
const login = document.querySelector('.header__name');
const password = document.querySelector('.header__password');
const enter = document.querySelector('.header__enter');
const accountName = document.querySelector('.header__account-name');
const loguot = document.querySelector('.button-loguot');

export default function () {
  account.addEventListener('click', () => {
    login.focus();
  });

  enter.addEventListener('click', () => {
    if (login.value.length >= 3 && password) {
      form.classList.add('display-none');
      exit.classList.remove('display-none');
      accountName.textContent = login.value;
      account.classList.add('header__button--active');
    }
  });

  loguot.addEventListener('click', () => {
    form.classList.remove('display-none');
    exit.classList.add('display-none');
    accountName.textContent = '';
    account.classList.remove('header__button--active');
  });
}
