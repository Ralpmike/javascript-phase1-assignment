/** Write a program that takes a user's age as input and displays a message based on the following conditions:
   - If the age is less than 18, display "You are a minor."
   - If the age is between 18 and 65 (inclusive), display "You are an adult."
   - If the age is greater than 65, display "You are a senior citizen." */

   let age = 66; 
   if (age < 18) {
    console.log (`You are a minor.`);
  }
  else if (age >= 18 && age <= 65) {
    console.log (`You are an adult.`);
  }
  else {
    console.log (`You are a senior citizen.`);
   }