import isEmail from 'validator/lib/isEmail';

const SHOW_ERROR_MASSAGES = 'show-error-message';

const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  hideErrorMassages(form);
  checkForEmptyFields(username, email, password, password2);
  checkEmail(email);
  checkEqualPasswords(password, password2);
  if (shouldSendForm(form)) console.log('FORMULÁRIO ENVIADO');
});

function hideErrorMassages(form: HTMLFormElement): void {
  form
    .querySelectorAll('.' + SHOW_ERROR_MASSAGES)
    .forEach((item) => item.classList.remove(SHOW_ERROR_MASSAGES));
}

function showErrorMassage(input: HTMLInputElement, msg: string): void {
  const formFields = input.parentElement as HTMLDivElement;
  const errorMassage = formFields.querySelector(
    '.error-message',
  ) as HTMLSpanElement;

  errorMassage.innerText = msg;
  formFields.classList.add(SHOW_ERROR_MASSAGES);
}

/*  VALIDAÇÕES */

function checkForEmptyFields(...inputs: HTMLInputElement[]): void {
  inputs.forEach((input) => {
    if (!input.value) showErrorMassage(input, 'Campo não pode ficar vazio');
  });
}

function checkEmail(input: HTMLInputElement): void {
  if (!isEmail(input.value)) showErrorMassage(input, 'Email inválido');
}

function checkEqualPasswords(
  password: HTMLInputElement,
  password2: HTMLInputElement,
) {
  if (password.value !== password2.value) {
    showErrorMassage(password, 'Senhas são diferentes');
    showErrorMassage(password2, 'Senhas são diferentes');
  }
}

function shouldSendForm(form: HTMLFormElement): boolean {
  let send = true;
  form
    .querySelectorAll('.' + SHOW_ERROR_MASSAGES)
    .forEach(() => (send = false));

  return send;
}
