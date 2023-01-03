import { Notify } from 'notiflix/build/notiflix-notify-aio';


const ref = {
  submitForm: document.querySelector('.form'),
};

ref.submitForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();

  let delay = Number(evt.currentTarget.elements.delay.value);
  let step = Number(evt.currentTarget.elements.step.value);
  let amount = Number(evt.currentTarget.elements.amount.value);
  

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

function createPromise(position, delay) {
  return new Promise((res, rej) => {
    setTimeout(() => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      res({ position, delay });
    } else {
      rej({ position, delay });
    }
    },delay)
  })

}

