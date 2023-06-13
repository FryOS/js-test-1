console.log("HOF");

const isRemovedItem = number => number < 5 ? true : false;

function filter(arr, filterFn){
    const filterArray = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if(filterFn(element)){
            filterArray.push(element);
        }        
    }
    return filterArray;
}

const arr = [1,5,8,3,9];
const filterArr = filter(arr, isRemovedItem)
console.log(`Отфильтрованный массив: ${filterArr}`);