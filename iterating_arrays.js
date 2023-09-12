/**Iterating through Arrays:**

10. Declare an array of numbers and use a `for` loop to print each element of the array.

11. Write a function that finds the largest number in an array of numbers using a loop. */

// QUESTION 10
let myArray = ['Book', 'Chair', 'Table', 'Plate', 'Spoon']

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i])
}

// QUESTION 11

function chooseLargestNUm(arr) {
  let minNum = 0;
  let maxNum = 0;
 for (let i = 0; i < arr.length; i++){
  if (arr[i] >minNum && arr[i] > maxNum){
    maxNum = arr[i]
    continue
  }
  }
  return `The maximum number is ${maxNum}`;
 
}

const arr = [1, 34, 56, 500, 90, 234, 100, 78]
console.log(chooseLargestNUm(arr))