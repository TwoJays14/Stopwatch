let seconds = document.getElementById('seconds');
let tens = document.getElementById('tens');
let minutes = document.getElementById('minutes');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const resetBtn = document.getElementById('reset-btn');
const timer = document.getElementById('timer');
let Interval;

let secondsCount = 00;
let tensCount = 00;
let minutesCount = 00;


startBtn.addEventListener('click', function() {
  clearInterval(Interval);

  Interval = setInterval(startTimer, 10)
})

stopBtn.addEventListener('click', function() {
  clearInterval(Interval);
})

resetBtn.addEventListener('click', function() {
  clearInterval
  tensCount = "00";
  secondsCount = "00";
  tens.innerHTML = tensCount;
  seconds.innerHTML = secondsCount;
})


function startTimer() {
  tensCount++;

  if(tensCount <= 9) {
    tens.textContent = "0" + tensCount
  }

  if(tensCount > 9) {
    tens.textContent = tensCount
  }

  if(tensCount > 99) {
    secondsCount++
    seconds.textContent = "0" + secondsCount
    tensCount = 0;
  }

  if(secondsCount <= 9) {
    seconds.textContent = "0" + secondsCount
  }

  if(secondsCount > 9) {
    seconds.textContent = secondsCount
  }

  if(secondsCount > 59) {
    minutesCount++
    secondsCount = 0;
    minutes.textContent = "0" + minutesCount
  }

  if(minutesCount > 9) {
    minutes.textContent = minutesCount;
  }
  

}