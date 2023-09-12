/****let` and `const` Scoping:**

18. Declare a variable using `let` and try to reassign its value. 
Then, declare a variable using `const` and try to reassign its value. */

let fruit = "mango";
fruit = "orange";
console.log(fruit)


const fruiting = "kiwi";
fruiting = "banana"     /**typeError: Assignment to constant variable */
console.log(fruiting)