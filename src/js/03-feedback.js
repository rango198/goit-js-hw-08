import throttle from 'lodash.throttle';
import { saveToLS, loadFromLS } from './helpers';
const LOCAL_KEY = 'feedback-form-state';

const refs = {
  formEL: document.querySelector('.feedback-form'),
};

refs.formEL.addEventListener('input', throttle(saveFormState, 500));
refs.formEL.addEventListener('submit', submitForm);

let formData = {};

function saveFormState(event) {
  formData[event.target.name] = event.target.value.trim();
  saveToLS(LOCAL_KEY, formData);
}

function onLoad() {
  let data = localStorage.getItem(LOCAL_KEY);
  if (!data) return;
  try {
    formData = JSON.parse(data);
    Object.entries(formData).forEach(([key, val]) => {
      if (refs.formEL.elements[key]) {
        refs.formEL.elements[key].value = val;
      }
    });
  } catch (error) {
    console.error('Error parsing JSON data:', error);
  }
}

function submitForm(event) {
  event.preventDefault();
  console.log(formData);
  localStorage.removeItem(LOCAL_KEY);
  event.currentTarget.reset();
  formData = {};
}

onLoad();
