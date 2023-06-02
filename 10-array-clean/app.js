console.log("HOF");

function filter(arr, removeItem){
    const filterArray = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if(removeItem(element)){
            filterArray.push(element);
        }        
    }

    return filterArray;
}


function removeItem(number){
    if(number >= 5){
        return true;
    }
    else{
        return false;
    }
}
const arr = [1,5,8,3,9];
const filterarr = filter(arr, removeItem)
console.log(filterarr);