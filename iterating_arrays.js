/**Iterating through Arrays:**

10. Declare an array of numbers and use a `for` loop to print each element of the array.

11. Write a function that finds the largest number in an array of numbers using a loop. */

// QUESTION 10
// let myArray = ['Book', 'Chair', 'Table', 'Plate', 'Spoon']

// for (let i = 0; i < myArray.length; i++) {
//   // console.log(myArray[i])
// }

// QUESTION 11

function chooseLargestNUm(arr) {
 for (let i = 0; i < arr.length; i++){
    return Math.max(...arr)
  }
 
}

const arr = [1, 34, 56, 500, 90, 234, 100, 78]
console.log(chooseLargestNUm(arr))