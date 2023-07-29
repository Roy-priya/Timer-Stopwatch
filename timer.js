// Timer
let timerInterval;
let timerSeconds = 0;
let timerRunning = false;

function updateTimerDisplay() {
  const hours = Math.floor(timerSeconds / 3600).toString().padStart(2, '0');
  const minutes = Math.floor((timerSeconds % 3600) / 60).toString().padStart(2, '0');
  const seconds = (timerSeconds % 60).toString().padStart(2, '0');
  document.getElementById('timer-display').textContent = `${hours}:${minutes}:${seconds}`;
}

function startTimer() {
  if (!timerRunning) {
    const inputSeconds = parseInt(document.getElementById('timer-input').value, 10);
    if (inputSeconds >= 1) {
      timerSeconds = inputSeconds;
      updateTimerDisplay();
      timerInterval = setInterval(() => {
        if (timerSeconds <= 0) {
          resetTimer();
          return;
        } else {
          timerSeconds--;
          updateTimerDisplay();
        }
      }, 1000);
      timerRunning = true;
    } else {
      alert('Please enter a valid time (at least 1 second).');
    }
  }
}

function stopTimer() {
  if (timerRunning) {
    clearInterval(timerInterval);
    timerRunning = false;
  }
}

function resetTimer() {
  stopTimer();
  const inputSeconds = parseInt(document.getElementById('timer-input').value, 10);
  timerSeconds = inputSeconds >= 1 ? inputSeconds : 0;
  updateTimerDisplay();
}

document.getElementById('start-timer').addEventListener('click', startTimer);
document.getElementById('stop-timer').addEventListener('click', stopTimer);
document.getElementById('reset-timer').addEventListener('click', resetTimer);

// Stopwatch
let stopwatchInterval;
let stopwatchSeconds = 0;
let stopwatchRunning = false;

function updateStopwatchDisplay() {
  const hours = Math.floor(stopwatchSeconds / 3600).toString().padStart(2, '0');
  const minutes = Math.floor((stopwatchSeconds % 3600) / 60).toString().padStart(2, '0');
  const seconds = (stopwatchSeconds % 60).toString().padStart(2, '0');
  document.getElementById('stopwatch-display').textContent = `${hours}:${minutes}:${seconds}`;
}

function startStopwatch() {
  if (!stopwatchRunning) {
    stopwatchInterval = setInterval(() => {
      stopwatchSeconds++;
      updateStopwatchDisplay();
    }, 1000);
    stopwatchRunning = true;
  }
}

function stopStopwatch() {
  if (stopwatchRunning) {
    clearInterval(stopwatchInterval);
    stopwatchRunning = false;
  }
}

function resetStopwatch() {
  stopStopwatch();
  stopwatchSeconds = 0;
  updateStopwatchDisplay();
}

document.getElementById('start-stopwatch').addEventListener('click', startStopwatch);
document.getElementById('stop-stopwatch').addEventListener('click', stopStopwatch);
document.getElementById('reset-stopwatch').addEventListener('click', resetStopwatch);
