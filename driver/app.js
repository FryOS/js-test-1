console.log("hello world");

const hasLicence = true;
const age = 20;
const isDrunk = false;


const isCan = hasLicence && (age >= 18) && !isDrunk ;
console.log( `${isCan ? "Может вести машину" : "Не Может вести машину"}`);