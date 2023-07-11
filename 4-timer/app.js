// Функция для получения времени до Нового Года

const countdown = document.getElementById("countdown");

const YEAR = 1000 * 60 * 60 * 24 * 30 * 1;
const YEAR_IN_MOUNTHS = 1000 * 60 * 60 * 24 * 30;
const YEAR_IN_DAYS = 1000 * 60 * 60 * 24;
const YEAR_IN_HOURS = 1000 * 60 * 60;
const YEAR_IN_MINUTES = 1000 * 60;
const YEAR_IN_SECONDS = 1000;

const newYear = new Date(new Date().getFullYear() + 1, 0, 1);

function getTimeUntilNewYear() {
  const now = new Date();

  const diff = newYear - now;

  const year = 0;
  const months = Math.floor(diff / YEAR_IN_MOUNTHS);
  const days = Math.floor(diff / YEAR_IN_DAYS) % 30;
  const hours = Math.floor(diff / YEAR_IN_HOURS) % 24;
  const minutes = Math.floor(diff / YEAR_IN_MINUTES) % 60;
  const seconds = Math.floor(diff / YEAR_IN_SECONDS) % 60;

  return {
    year,
    months,
    days,
    hours,
    minutes,
    seconds,
  };
}

function printTimeUntilNewYear(time) {
  return `${time.months} месяцев ${time.days} дней ${time.hours} чсасов ${time.minutes} минут ${time.seconds} секунд`;
}

function updateCountdown() {
  const countDownTimer = printTimeUntilNewYear(getTimeUntilNewYear());
  countdown.textContent = countDownTimer;
}

const timeUntilNY = getTimeUntilNewYear();

const interval = setInterval(updateCountdown, 1000);

const trueNY =
  timeUntilNY.seconds === 0 &&
  timeUntilNY.minutes === 0 &&
  timeUntilNY.hours === 0 &&
  timeUntilNY.days === 0 &&
  timeUntilNY.months === 0;

// Обновление информации
if (trueNY) {
  clearInterval(interval);
} else {
  setInterval(updateCountdown, 1000);
}
