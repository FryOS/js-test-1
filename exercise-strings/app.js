
const str = "Вася aka Terminator Perdinator Пупкин";

if ((str.includes("Вася")) && (str.includes("Пупкин"))) {
console.log(`${str.slice(str.indexOf("В"), str.indexOf("В") + 4)} 
${str.slice(str.indexOf("П"), str.indexOf("П") + 6)}`);
}