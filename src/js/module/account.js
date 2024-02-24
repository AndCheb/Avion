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

function setValue() {
  localStorage.setItem('nickName', accountInputName.value);
  accountText.textContent = accountInputName.value;
}

if (localStorage.getItem('nickName')) {
  toggleState();
  accountText.textContent = localStorage.getItem('nickName');
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
      setValue();
      toggleState();
    }
  });

  accountExit.addEventListener('click', () => {
    localStorage.removeItem('nickName');
    accountText.textContent = '';
    toggleState();
  });

  accountPassword.addEventListener('keypress', (e) => {
    if (
      accountInputName.value.length &&
      accountPassword.value.length &&
      e.code === 'Enter'
    ) {
      setValue();
      toggleState();
    }
  });

  accountInputName.addEventListener('keypress', (e) => {
    if (
      accountInputName.value.length &&
      accountPassword.value.length &&
      e.code === 'Enter'
    ) {
      setValue();
      toggleState();
    }
  });
}
