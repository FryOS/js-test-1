// Функция для получения времени до Нового Года
const ONE_DAY = 1000 * 60 * 60 * 24;

const MOUNTHS = 1000 * 60 * 60 * 24 * 30;
const HOURS = 1000 * 60 * 60;
const MINUTES = 1000 * 60;
const SECONDS = 1000;

const countdown = document.getElementById("countdown");
const pluralRules = new Intl.PluralRules("ru");

const PLURAL_OPTIONS = {
  MONTH: ["месяц", "месяца", "месяцев"],
  DAY: ["день", "дня", "дней"],
  HOUR: ["час", "часа", "часов"],
  MINUTE: ["минута", "минуты", "минут"],
  SECOND: ["секунда", "секунды", "секунд"],
};

const dateNow = new Date();
const currentYear = dateNow.getFullYear();
const currentMonth = dateNow.getMonth() + 1;
const newYear = new Date(currentYear + 1, 0, 1);
const newYearInTimestamp = newYear.getTime();

function declOfNum(n, text_forms) {
  n = Math.abs(n) % 100;
  var n1 = n % 10;
  if (n > 10 && n < 20) {
    return text_forms[2];
  }
  if (n1 > 1 && n1 < 5) {
    return text_forms[1];
  }
  if (n1 == 1) {
    return text_forms[0];
  }
  return text_forms[2];
}

function getNumberOfDaysInMonth(start, end) {
  const date1 = new Date(start);
  const date2 = new Date(end);
  const diifInTime = date2.getTime() - date1.getTime();
  const diffInDays = Math.round(diifInTime / ONE_DAY);
  return diffInDays;
}

function daysInMonth(year, month) {
  let array = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return month === 2 && DateExt.isLeapYear(year) ? 29 : array[month - 1];
}

function getTimeUntilNewYear() {
  const now = new Date();
  const diff = newYear - now;
  const endDay = daysInMonth(now.getFullYear(), now.getMonth());

  const months = Math.floor(diff / MOUNTHS);
  const hours = Math.floor(diff / HOURS) % 24;
  const minutes = Math.floor(diff / MINUTES) % 60;
  const seconds = Math.floor(diff / SECONDS) % 60;
  const days = getNumberOfDaysInMonth(
    now,
    new Date(now.getFullYear(), now.getMonth(), endDay)
  );

  return {
    months,
    days,
    hours,
    minutes,
    seconds,
  };
}

function printTimeUntilNewYear(time) {
  return `${time.months} ${declOfNum(time.months, PLURAL_OPTIONS.MONTH)}
  ${time.days} ${declOfNum(time.days, PLURAL_OPTIONS.DAY)}
  ${time.hours} ${declOfNum(time.hours, PLURAL_OPTIONS.HOUR)}
  ${time.minutes} ${declOfNum(time.minutes, PLURAL_OPTIONS.MINUTE)}
  ${time.seconds} ${declOfNum(time.seconds, PLURAL_OPTIONS.SECOND)}`;
}

function updateCountdown() {
  const countDownTimer = printTimeUntilNewYear(getTimeUntilNewYear());
  countdown.textContent = countDownTimer;

  if (new Date().getTime() > newYearInTimestamp) {
    clearInterval(intervalId);
  }
}

const intervalId = setInterval(updateCountdown, 1000);
