'use strict';

console.log('====Task 1====');

let array = ['455', 87.15, true, undefined, 7, null, 'false', [], {}];

for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'number') {
        console.log(`Typeof ${array[i] + 3}: ${typeof array[i]}`);
    } else {
        console.log(`Typeof ${array[i]}: ${typeof array[i]}`);
    } 
}

console.log('====Task 2====');

let someNum = +prompt('Enter an integer');
let length = someNum;
let max = 10;
let min = 0;
let someArray = [...Array(length)];

for (let i = 0; i < someArray.length; i++) {
    someArray[i] = Math.floor(Math.random() * (max - min + 1)) + min; 
}
console.log(someArray);
 
let copyArray = Object.assign([], someArray);

for (let i = 0; i < copyArray.length; i++) {
    if (([i] + 1) % 3 == 0) {
       copyArray[i] = copyArray[i] * 3;
    } 
}
console.log(copyArray); 

console.log('====Task 3====');

let student1 = {
    firstName: 'Ivan',
    lastName: 'Ivanov',
    mark: 95,
  };

let student2 = { ...student1, mark: 96 }

let student3 = Object.assign({}, student1);
student3.mark = 100;

let sumMark = [student1, student2, student3]
let sum = 0;

for (let i = 0; i < sumMark.length; i++) {
    if (typeof sumMark[i]['mark'] === 'number') {
        sum += sumMark[i]['mark'];
    }
}
console.log(sum / sumMark.length);

console.log(student1.mark, student2.mark, student3.mark); 

// console.log(student1['mark'], student2['mark'], student3['mark']); 

for (let key in student1) {
    console.log(`key = ${key}, value = ${student1[key]}`);
}


