
/****ES6+ Syntax Improvements:**

17. Rewrite a previous function using an arrow function syntax. */

const calculateTax = (income) => {
  if (income <= 10_000){
    return `Your tax is : $${income * 10/100}`;
    
  }
  else if (income >= 10_001 && income <= 50_000){
    return `Your tax is : $${income * 20/100}`;

  }
  else {
    return `Your tax is : $${income * 30/100}`;
  }
}


console.log(calculateTax(40000))
