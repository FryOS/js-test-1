console.log("hello world");

function encrypt(password) {
  return password.split("").reverse().join("");
}

function decrypt(password) {
  return password.split("").reverse().join("");
}

function check(encryptedPassword, password) {
  return encryptedPassword === encrypt(password);
}

const password = 'password';
const encryptedPassword = encrypt(password);
console.log(encryptedPassword); // ssapdrow

console.log(check(encryptedPassword, password)); // true
console.log(check(encryptedPassword, 'wrongpassword')); // false

console.log(decrypt(encryptedPassword)); // password
