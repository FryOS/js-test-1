function encrypt(password) {
  const left =  password.split("").reverse().join("").slice(0,4);
  const right =  password.split("").reverse().join("").slice(4,password.length);
  return [right, left ].join("");
}

function decrypt(password) {
  const left =  password.split("").reverse().join("").slice(0,4);
  const right =  password.split("").reverse().join("").slice(4,password.length);
  return [left, right].join("");
}

function check(encryptedPassword, password) {
  return encryptedPassword === encrypt(password);
}

const password = 'password';
const encryptedPassword = encrypt(password);
console.log(encryptedPassword); // drowssap

console.log(check(encryptedPassword, password)); // true
console.log(check(encryptedPassword, 'wrongpassword')); // false

console.log(decrypt(encryptedPassword)); // password
