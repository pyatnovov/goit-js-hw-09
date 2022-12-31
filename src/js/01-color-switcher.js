const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body');

let intervalID = null;

startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);

function onStartBtnClick() {
  intervalID = setInterval(() => {
    function getRandomHexColor() {
      return (body.style.backgroundColor = `#${Math.floor(
        Math.random() * 16777215
      ).toString(16)}`);
    }
    getRandomHexColor();
  }, 1000);

  startBtn.setAttribute('disabled', 'disabled');
  stopBtn.removeAttribute('disabled', 'disabled');
}

function onStopBtnClick() {
  clearInterval(intervalID);

  startBtn.removeAttribute('disabled', 'disabled');
  stopBtn.setAttribute('disabled', 'disabled');
}
