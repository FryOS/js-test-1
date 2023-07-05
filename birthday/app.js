const YEAR_IN_MILLISECONDS = 1000 * 60 * 60 * 24 * 30 * 12;

function validateBirthday(birthday) {
  const dateNow = new Date(Date.now());
  const age = Math.round(
    (dateNow - new Date(birthday)) / YEAR_IN_MILLISECONDS
  );
  return age >= 18;
}

const date = "1987-12-01";

console.log(validateBirthday(date));
