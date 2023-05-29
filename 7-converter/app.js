console.log("hello world");

function converter(value, currencyIn, currencyOut) {
    const USD = 80;
    const EUR = 70;
    if (currencyIn === "RUB" && currencyOut === "USD") {
        const count = value*USD
        return count
    }
    if (currencyIn === "RUB" && currencyOut === "EUR") {
        const count = value*EUR
        return count
    }
    else return null;
}

console.log(converter(2, "RUB", "EUR"));
console.log(converter(2, "RUB", "USD"));
console.log(converter(2, "RUB", "RUB"));