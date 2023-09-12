/**Write a function called `calculateTax` that takes 
 * an income as input and calculates the tax based on the following rules:
    - Income up to $10,000: 10% tax
    - Income between $10,001 and $50,000: 20% tax
    - Income above $50,000: 30% tax */

    // QUESTION 12
  function calculateTax(income) {
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

