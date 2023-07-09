
const arr = ["!", "JS", "love", "I"]

const arr2 = [];
for (let i = arr.length - 1; i >= 0; i--) {
    
    
    arr2.push(arr[i]);
   
} console.log(arr2.join(" "));

const operations = [1000, -700, 300, -500, 10000];

function resBalance(arr){
    let res = 100;
    for (const iterator of arr) {
        res += iterator;
    }
    return res;
}
console.log(resBalance(operations));

function negBalance(arr){
    let res = 100;
    for (let index = 0; index < arr.length; index++) {
        res += arr[index];
        if (res < 0){
            return false;
        } 
    }
    return true;
}

console.log(negBalance(operations));

function averageBalance(arr){
    let posCount = 0;
    let negCount = 0;
    let posSum = 0;
    let negSum = 0;
       

    for (const iterator of arr) {
        if (iterator < 0){
            posCount++;
            posSum += iterator;
        }
        else{
            negCount++;
            negSum += iterator;
        }
        
    }
    return [posSum/posCount, negSum/negCount];
}
console.log(averageBalance(operations));

for (let i = 1; i < 3; i++) {
    for (let j = 1; j < 3; j++) {
        console.log(i);
    }
}