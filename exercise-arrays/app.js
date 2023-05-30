const tasks = ["Задача 1"];

function addTask(arr,task){
    arr.push(task);
}

function deleteTask(arr, task){
    if(arr.includes(task)) {
        arr.pop(task);
    }    
}


function wrapTask(arr, task){
    const index = arr.indexOf(task);
    if(index === -1){
        return;
    }
    const oldTask = arr[index];
    arr.splice(index, 1);
    arr.unshift(oldTask);
}
// console.log(tasks);
// addTask(tasks,"Задача 2");
// addTask(tasks,"Задача 3");
// addTask(tasks,"Задача 4");
// console.log(tasks);
// deleteTask(tasks, "Задача 3");
// wrapTask(tasks, "Задача 2");



const [task1, task2, ...task] = tasks;
console.log(task);

const url = "https://purpleschool.ru/course/javascript";

const res = url.split("/");
const [https, domain, ...strings] = res;
console.log(https, domain, ...strings);


console.log(https.split(":")[1])

let array = [1, 2, 3, 4];
const аа = array.push(5);
console.log(array);

let arr1 = ['1', '2', '3'];
console.log(arr1.indexOf('1'));

let arr2 = ['1', '2', '3', '4'];
let [one, , three] = ['1', '2', '3', '4'];
console.log(one, three);