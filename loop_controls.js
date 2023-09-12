// QUESTION 7
/****Loops and Loop Control Statements:**

7. Write a function that prints numbers from 1 to 10 using a `for` loop.

8. Implement a program that continuously asks the user to enter a number until they enter 0. Use a `while` loop for this task.

9. Create a program that calculates the sum of all even numbers from 1 to 100 using a `for` loop and the `continue` statement. */

// QUESTION 7
const myNum = []

for (let num = 1; num <=10; num++){
  myNum.push(num)
}
console.log(...myNum)

// QUESTION 8


// QUESTION 9
let sumOfEvenNum = 0;
for (let i = 1; i <= 100; i++){
  if (i % 2 === 0){
    sumOfEvenNum += i; 
  }
  else {
    continue
  }
}

console.log(sumOfEvenNum)

