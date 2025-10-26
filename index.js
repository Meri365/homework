//1
function myFunction(x) {
  return Math.round(x * 100) / 100;
}

let u = myFunction(2.45678);
console.log(u);

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
function myFuncti(x, start) {
  if (start) {
    return x.substring(0, 3);
  } else {
    return x.substring(x.length - 3, x.length);
  }
}
let k = myFuncti('Hello world', true);
let l = myFuncti('Hello world', false);

console.log(k);
console.log(l);

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

let tex = strLength('asd212');
console.log(tex);

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
let v = removeFromArray(numbers);
console.log(v);


//13
function findIndexGreaterThan10(arre){
  return arre.findIndex(function(x){
    return x > 10;
  });
}
let ph = findIndexGreaterThan10([2,26,100])
console.log(ph);
//14
function getEvenNumbers(arr) {
  return arr.filter(function(x){
    return x % 2 === 0;
  });

}
let f = getEvenNumbers(numbers);
console.log(f);
//15
function getSum(arr){
  return arr.map(function(x){
    return x * 2;
  });
}
let q = getSum(numbers);
console.log(q);

//16
function getSum(arr) {
  return arr.reduce(function(sum, x) {
    return sum + x;
  },0);
}
let r = getSum(numbers);
console.log(r);
//17
function containsEl(arr, el) {
  return arr.includes(el);
}
let rf = containsEl(numbers, 1);
console.log(rf);
//18
function mergeArrays(arr1, arr2) {
  return arr1.concat(arr2);
}
let nums2 = [4, 5, 6, 7];
let bv = mergeArrays(numbers, nums2);
console.log(bv);
//19
function  getSlice(arr) {
  return arr.slice(1,3);
}
let as = getSlice(numbers);
console.log(as);

//20
function sortAscending(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  });
}
let mn = sortAscending(numbers);
 console.log(mn);
//21
function getObjectKeys(obj) {
  return Object.keys(obj);
}
const car ={
  type: "Fiat",
  model: "500",
  color: "white"
};

console.log(getObjectKeys(car));


//22
function getObjectValues(obj) {
  return Object.values(obj);
}
let zx = getObjectValues(car);
console.log(zx);
 //23
 function hasKey(obj, key) {
  return obj.hasOwnProperty(key);
 }
let sf = hasKey(car, "color");
console.log(sf);
 //24
 function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
 }
const car2 = {
  type: "Sedan",
  model: "700",
  color: "black"
};
let ob = mergeObjects(car, car2);
console.log(ob);


//25
function getEnteries(obj) {
  return Object.entries(obj);
}
let bar = getEnteries(car);
console.log(bar);
