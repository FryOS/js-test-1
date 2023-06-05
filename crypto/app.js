function encrypt(password) {
  const passArr = [...password];
  const middle = Math.floor(passArr.length/2);
  
  const left =  passArr.join("").slice(0,middle).split("").reverse();
  const right =  passArr.join("").slice(middle).split(""); 
  [right[0], right[right.length - 1]] = [right[right.length - 1], right[0]]; 
  return [...left, ...right].join("");
}

function check(encryptedPassword, password) {
  return encryptedPassword === encrypt(password);
}

const password = 'password';
const encryptedPassword = encrypt(password); //ssapdorw
console.log(encryptedPassword); 

console.log(check(encryptedPassword, password)); // true
console.log(check(encryptedPassword, 'wrongpassword')); // false
