const accountLogin = document.querySelector('.account__login');
const accountLoguot = document.querySelector('.account__logout');
const account = document.querySelector('.account__button');
const accountInputName = document.querySelector('.account__name');
const accountPassword = document.querySelector('.account__password');
const accountButtonEnter = document.querySelector('.account__enter');
const accountText = document.querySelector('.account__text');
const accountExit = document.querySelector('.account__exit');

export default function () {
  account.addEventListener('click', () => {
    accountInputName.focus();
  });

  accountButtonEnter.addEventListener('click', () => {
    if (accountInputName.value.length >= 3 && accountPassword) {
      accountLogin.classList.add('display-none');
      accountLoguot.classList.remove('display-none');
      accountText.textContent = accountInputName.value;
      account.classList.add('account__button--active');
    }
  });

  accountExit.addEventListener('click', () => {
    accountLogin.classList.remove('display-none');
    accountLoguot.classList.add('display-none');
    accountText.textContent = '';
    account.classList.remove('account__button--active');
  });
}
