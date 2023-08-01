// Функция для получения времени до Нового Года

const countdown = document.getElementById("countdown");

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}

const newYear = new Date(new Date().getFullYear() + 1, 0, 1);
const dateNow = new Date();
const currentYear = dateNow.getFullYear();
const currentMonth = dateNow.getMonth() + 1;

// 👇️ Current Month
const daysInCurrentMonth = getDaysInMonth(currentYear, currentMonth);

const YEAR = 2592000000;
const YEAR_IN_MOUNTHS = 2592000000;
const YEAR_IN_DAYS = 86400000;
const YEAR_IN_HOURS = 3600000;
const YEAR_IN_MINUTES = 60000;
const YEAR_IN_SECONDS = 1000;

function getTimeUntilNewYear() {
  const now = new Date();

  const diff = newYear - now;

  
  const months = Math.floor(diff / 1000/60/60/24/30);
  const days = Math.floor(diff / 1000/60/60/24);
  const hours = Math.floor(diff / 1000/60/60) % 24;
  const minutes = Math.floor(diff / 1000/60) % 60;
  const seconds = Math.floor(diff / 1000) % 60;


  return {
    
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
