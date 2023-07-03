const dateNow = new Date(Date.now());

function validateBirthday(birthday) {
  const age = Math.round(
    (dateNow - new Date(birthday)) / (1000 * 60 * 60 * 24 * 30 * 12)
  );
  if (age <= 18) {
    return false;
  } else {
    true;
  }
}

const date = "2006-12-01";

console.log(validateBirthday(date));
