// Функция для получения времени до Нового Года


  const countdown = document.getElementById("countdown");


function getTimeUntilNewYear() {
  const YEAR_IN_MOUNTHS = 1000 * 60 * 60 * 24 * 30;
  const YEAR_IN_DAYS = 1000 * 60 * 60 * 24;
  const YEAR_IN_HOURS = 1000 * 60 * 60;
  const YEAR_IN_MINUTES = 1000 * 60;
  const YEAR_IN_SECONDS = 1000;

  const now = new Date();
  const newYear = new Date(now.getFullYear() + 1, 0, 1);
  const diff = newYear - now;

  const months = Math.floor(diff / YEAR_IN_MOUNTHS);
  const days = Math.floor(diff / YEAR_IN_DAYS) % 30;
  const hours = Math.floor(diff / YEAR_IN_HOURS) % 24;
  const minutes = Math.floor(diff / YEAR_IN_MINUTES) % 60;
  const seconds = Math.floor(diff / YEAR_IN_SECONDS) % 60;

  return `${months} месяцев ${days} дней ${hours} чсасов ${minutes} минут ${seconds} секунд`;
}

function updateCountdown() {
  const countDownTimer = getTimeUntilNewYear();
  countdown.textContent = countDownTimer;
}

// Обновление информации
setInterval(updateCountdown, 1000);
