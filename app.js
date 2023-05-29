
function toPower(num, power) {
    const res = num ** power;
    return res;
}

// console.log(toPower(2,3));

// const toPowerArrow = (num, power) => res = num ** power;    
    

// console.log(toPowerArrow(2,3));


const ageUser = 25;
const hasJob = true;
const countMoney = 500;

function getCreditor(age, hasJob) {
    let money  = 0;
    switch (true) {
        case Number(age) > 24 && hasJob:
            money = 500
        break;
        case Number(age) > 24:
            money = 100
        break;
        default:
            money = 0;
    }
    return money;
}


function canBuyMacbook(priceLaptop, age, countMoney, hasJob) { 
   const credit = getCreditor( ageUser, hasJob);
   if(credit + countMoney >= priceLaptop) {
    console.log(`Сможет купить ноутбук : на руках ${credit +  countMoney}`);  
   } else{
    console.log(`Не сможет купить ноутбук : на руках ${credit +  countMoney}`);
   }
}

console.log(canBuyMacbook(2000, ageUser, countMoney, hasJob));

let add = (a, b) => {
    return a + b;
}

console.log(add(1,2));