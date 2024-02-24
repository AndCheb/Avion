const accountLogin = document.querySelector('.account__login');
const accountLoguot = document.querySelector('.account__logout');
const account = document.querySelector('.account__button');
const accountInputName = document.querySelector('.account__name');
const accountPassword = document.querySelector('.account__password');
const accountButtonEnter = document.querySelector('.account__enter');
const accountText = document.querySelector('.account__text');
const accountExit = document.querySelector('.account__exit');

function toggleState() {
  accountLogin.classList.toggle('display-none');
  accountLoguot.classList.toggle('display-none');
  account.classList.toggle('account__button--active');
}

export default function () {
  account.addEventListener('click', () => {
    accountInputName.focus();
  });

  accountButtonEnter.addEventListener('click', () => {
    if (
      accountInputName.value.length &&
      accountPassword.value.length
    ) {
      accountText.textContent = accountInputName.value;
      toggleState();
    }
  });

  accountExit.addEventListener('click', () => {
    accountText.textContent = '';
    toggleState();
  });

  accountPassword.addEventListener('keypress', (e) => {
    if (
      accountInputName.value.length &&
      accountPassword.value.length &&
      e.code === 'Enter'
    ) {
      accountText.textContent = accountInputName.value;
      toggleState();
    }
  });

  accountInputName.addEventListener('keypress', (e) => {
    if (
      accountInputName.value.length &&
      accountPassword.value.length &&
      e.code === 'Enter'
    ) {
      accountText.textContent = accountInputName.value;
      toggleState();
    }
  });
}
