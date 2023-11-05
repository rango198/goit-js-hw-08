import throttle from 'lodash.throttle';
import { saveToLS, loadFromLS } from './helpers';

const refs = {
  formEL: document.querySelector('.feedback-form'),
  emailInput: document.querySelector('input[name="email"]'),
  messageInput: document.querySelector('textarea[name="message"]'),
};

refs.formEL.addEventListener('input', throttle(saveFormState, 500));
refs.formEL.addEventListener('submit', submitForm);

function saveFormState() {
  const formStateSave = {
    email: refs.emailInput.value.trim(),
    message: refs.messageInput.value.trim(),
  };
  saveToLS('feedback-form-state', formStateSave);
}

function onLoad() {
  const formStateLoad = loadFromLS('feedback-form-state');
  if (formStateLoad) {
    refs.emailInput.value = formStateLoad.email;
    refs.messageInput.value = formStateLoad.message;
  }
}

function submitForm(event) {
  event.preventDefault();
  const dataForm = {
    email: refs.emailInput.value.trim(),
    message: refs.messageInput.value.trim(),
  };
  console.log(dataForm);
  localStorage.removeItem('feedback-form-state');
  refs.emailInput.value = '';
  refs.messageInput.value = '';
}

onLoad();
