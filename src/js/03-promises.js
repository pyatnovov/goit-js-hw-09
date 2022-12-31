import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  submitForm: document.querySelector('.form'),
  firstDelay: document.querySelector('[name=delay]'),
  delayStep: document.querySelector('[name=step]'),
  formAmount: document.querySelector('[name=amount]'),
};

refs.submitForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();

  let delay = Number(refs.firstDelay.value);
  let step = Number(refs.delayStep.value);
  let amount = Number(refs.formAmount.value);
  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${i} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${i} in ${delay}ms`);
      });
    delay += step;
  }
}

