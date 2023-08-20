const countdownElement = document.getElementById("countdown");
const alarm = document.getElementById("alarm");

let countdown;
let min = 50;
let sec = 0;
let minutes = min;
let seconds = sec; // Change this to the desired starting seconds
let isRunning = false;

function updateCountdownDisplay() {
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  countdownElement.textContent = `${formattedMinutes}:${
    seconds < 10 ? "0" : ""
  }${seconds}`;
}

function startCountdown() {
  if (!isRunning) {
    isRunning = true;
    clearInterval(countdown);
    countdown = setInterval(() => {
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(countdown);
          isRunning = false;
          alarm.play(); // Play the alarm sound
          document.body.classList.add("green-bg"); // Change background to green
          return;
        }
        minutes--;
        seconds = 59;
      } else {
        seconds--;
      }
      updateCountdownDisplay();
    }, 1000);
  }
}

function pauseCountdown() {
  clearInterval(countdown);
  isRunning = false;
}

function resetCountdown() {
  clearInterval(countdown);
  minutes = min;
  seconds = sec; // Reset to the desired starting seconds
  updateCountdownDisplay();
  isRunning = false;
  alarm.pause(); // Pause the alarm sound if it's playing
  alarm.currentTime = 0; // Reset the audio playback to the beginning
  document.body.classList.remove("green-bg"); // Reset background to white
}

countdownElement.addEventListener("click", () => {
  if (isRunning) {
    pauseCountdown();
  } else {
    startCountdown();
  }
  if (seconds === 0) {
    if (minutes === 0) {
      resetCountdown();
    }
  }
});

updateCountdownDisplay();
