
const balance = 1001;
const bonusBalance = 101;
const isBanned = false;
const isExist = false;
const isSelling = true;

const isCan = (balance > 1000 || bonusBalance > 100) && !isBanned && !isExist && isSelling;
console.log( `${isCan ? "Yes" : "No"}`);

console.log(true && "PS");

console.log(  "PS" && true);

console.log('12' ?? 'Yes')

