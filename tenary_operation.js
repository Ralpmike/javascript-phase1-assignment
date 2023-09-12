// Question 5

/**Write a function that takes a number as input and returns 
 * "Even" if it's even and "Odd" if it's odd using the ternary operator. */

function checkOddorEven(num) {
  return (num % 2 === 0) ? `${num}: Even` : `${num}: Odd`;
  
}
console.log(checkOddorEven(2))