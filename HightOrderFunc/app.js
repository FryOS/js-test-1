
function power(pow){
    return function(num){
        return num**pow;
    }
}

const power1 = pow => num => num ** power;

const res = power(2)
const res1 = power(2)
console.log(res(4));
console.log(res1(4));

function a(num, b) {
    return b(num);
}
console.log(a(1, (n) => n + 5));


