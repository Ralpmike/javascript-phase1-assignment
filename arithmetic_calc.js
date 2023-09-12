// Question 1
//Write a function that takes two numbers and returns 
// their sum, difference, product, and quotient using arithmetic operators.

function arithmeticCalculation(num1, num2) {
  const sum = num1 + num2;
  const difference = num1 - num2;
  const product = num1 * num2;
  const quotient = num1 / num2;
  
  
  return `\\Sum :${sum}\n Difference: ${difference}\n Product: ${product}\n Quotient: ${quotient}`
}


// console.log(arithmeticCalculation(12, 5))

// Question 2
//2 Create a function that compares two numbers and returns true 
// if they are equal and false otherwise, using comparison operators.

function compareNumbers(num1, num2) {
  if (num1 === num2){
    return true
  }
  else{
    return false
  }

}

// console.log(compareNumbers(4, 4))

// Question 3
// Implement a function that checks if a given number is even or odd using logical operators.

function checkWhetherEVenOrOdd(num) {
  if (num === 0){
    return `Out of range`
  }
    else if (num % 2 === 0){
      return `${num} is an even number`;
    }
    else if (num % 2 === 1 ) {
      return `${num} is an odd number`;
    }
    
  
}

console.log(checkWhetherEVenOrOdd(0))