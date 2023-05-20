// // Define Array

// const arr = [12, 44, 76, 99, 84];
// console.log(arr);

// // unshift() use the add element to the start of an array

// const arr = [12, 44, 76, 99, 84];
// console.log(arr);
// arr.shift(3);
// console.log(arr);

// // push() use the add element at the end of an array

// const arr = [12, 44, 76, 99, 84];
// console.log(arr);
// arr.push(3);
// console.log(arr);

// // unshift() method we also stated that it returns the length of the new array

// const arr = [12, 44, 76, 99, 84];
// console.log(arr);
// let arrlength = arr.unshift(9, 87, 54, 70);
// console.log(arrlength);

// // splice() use to add element in the array

// const arr = [20, 40, 33, 78, 10];
// console.log(arr);
// arr.splice(2, 0, 2000);
// console.log(arr);

// // pop() use to remove the last element of the array

// const arr = [12, 44, 76, 99, 84];
// console.log(arr);
// arr.pop();
// console.log(arr);

// // shift() use to remove the first element of the array

// const arr = [12, 44, 76, 99, 84];
// console.log(arr);
// arr.shift();
// console.log(arr);

// // delete use to remove the first element of the array

// const arr = [12, 44, 76, 99, 84];
// console.log(arr);
// delete arr[3];
// console.log(arr);

// // splice(1, 0) use to remove any element of the array

// const arr = [20, 40, 33, 78, 10];
// console.log(arr);
// arr.splice(3, 2);
// console.log(arr);

// // Stack are useful when we need to make sure elements follow the LIFO Pattern.

let stack = [];

for (let i = 1; i <= 5; i++) {
  stack.push(i);
  console.log(stack);
}

console.log("\n******************\n");

for (let i = 1; i <= 5; i++) {
  console.log(stack.pop());
  console.log(stack);
}
