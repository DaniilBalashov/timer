const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');


let interval;


const createTimerAnimator = () => {
  return (timeSeconds) => {
    clearInterval(interval);
    interval = setInterval(function () {
      if (timeSeconds < 0) {
        clearInterval(interval);
      }else {
        let hours = Math.floor(timeSeconds / 60 / 60 % 60);
        hours = hours  < 10 ? '0' + hours : hours;
        let minutes = Math.floor (timeSeconds / 60 % 60);
        minutes = minutes < 10 ? '0' + minutes : minutes;
        let seconds = timeSeconds % 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        let time = `${hours}:${minutes}:${seconds}`;
        timerEl.innerHTML = time;
      }
      timeSeconds--;
    }, 1000)
  }
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  const number = inputEl.value;
  inputEl.value = number.replace(/\D/g, '')
});

buttonEl.addEventListener('click', () => {
  const timeSeconds = Number(inputEl.value);
  
  animateTimer(timeSeconds);

  inputEl.value = "";
  
});
