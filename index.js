//1
function myFunction(x) {
  return Math.round(x * 100) / 100;
}

let a = myFunction(2.45678);
console.log(a);

//2
function isNumber(x) {
  return typeof x == 'number';
}

let input = isNumber('j');
console.log(input);

//3
function numberLength(x) {
  let numberString = x.toString();
  return numberString.length;
}

let num = numberLength(542123456);
console.log(num);

//4
function quotient(x) {
  return Math.floor(x);
}

let b = quotient(542, 123456);
console.log(b);

//5
function uppercase(x) {
  return x.toUpperCase();
}

let c = uppercase('sdfghj');
console.log(c);

//6
function find(x, y) {
  return x.includes(y);
}

let d = find('sdfghj', 'sdy');
console.log(d);

//7
function replacespace(x, y, z) {
  return x.replaceAll(y, z);
}

let e = replacespace('sdfg h j', ' ', '_');
console.log(e);

//8
function myFunction(x, start) {
  if (start) {
    return x.substring(0, 3);
  } else {
    return x.substring(x.length - 3, x.length);
  }
}

let a = myFunction('Hello world', true);
let b = myFunction('Hello world', false);

console.log(a);
console.log(b);

//9
function function9(str) {
  return str.trim();
}

let text = function9(' Hello world  ');

console.log(text);

//10
function strLength(str) {
  return str.length;
}

let text = strLength('asd212');
console.log(text);

//11
function addToArray(array, val) {
  return array.push(val);
}

let numbers = [1, 2, 3, 4];
addToArray(numbers, 6);
console.log(numbers);

//12
function removeFromArray(nums) {
  return nums.pop();
}
removeFromArray(numbers);

//13
function findIndexGreaterThan10(arr){
  return arr.findIndex(function(x){
    return x > 10;
  });
}

//14
function getEvenNumbers(arr) {
  return arr.filter(function(x){
    return x % 2 === 0;
  });

}
getEvenNumbers(numbers);
//15
function getSum(arr){
  return arr.map(function(x){
    return x * 2;
  });
}
multyplyByTwo(numbers);

//16
function getSum(arr) {
  return arr.reduce(function(sum, x) {
    return sum + x;
  },0);
}
getSum(numbers);

//17
function containsEl(arr, el) {
  return arr.includes(el);
}
containsEl(numbers, 1);

//18
function mergeArrays(arr1, arr2) {
  return arr1.concat(arr2);
}
let nums2 = [4, 5, 6, 7];
mergeArrays(numbers, nums2);

//19
function  getSlice(arr) {
  return arr.slice(1,3);
}
getSlice(numbers);

//20
function sortAscending(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  });
}
sortAscending(numbers);
 
//21
function getObjectKeys(obj) {
  return Object.keys(obj);
}
const car ={
  type: "Fiat",
  model: "500",
  color: "white"
};

//22
function getObjectValues(obj) {
  return Object.values(obj);
}
getObjectValues(car);

 //23
 function hasKey(obj, key) {
  return obj.hasOwnProperty(key);
 }
 hasKey(car, "color");

 //24
 function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
 }
const car2 = {
  type: "Sedan",
  model: "700",
  color: "black"
};
mergeObjects(car, car2);

//25
function getEnteries(obj) {
  return Object.entries(obj);
}
getEnteries(car);
