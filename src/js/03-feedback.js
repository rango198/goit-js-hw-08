import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');

// Функція, яка зберігає стан форми в локальне сховище з використанням throttle
const saveFormState = throttle(function () {
  const formState = {
    email: emailInput.value.trim(),
    message: messageInput.value.trim(),
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
}, 500);

// Додати слухачі подій input на поля форми для збереження стану форми
emailInput.addEventListener('input', saveFormState);
messageInput.addEventListener('input', saveFormState);

// Функція для завантаження стану форми з локального сховища
function load() {
  const formState = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (formState) {
    emailInput.value = formState.email;
    messageInput.value = formState.message;
  }
}

// Додати слухач події submit на форму
form.addEventListener('submit', submitForm);

// Функція для обробки сабміту форми
function submitForm(event) {
  event.preventDefault();
  const formState = {
    email: emailInput.value.trim(),
    message: messageInput.value.trim(),
  };
  console.log(formState);
  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';
}


// Завантажити стан форми при завантаженні сторінки
load();
