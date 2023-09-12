/**13. Create an array of fruits. Write a function that adds
 *  a new fruit to the end of the array using the `push` method.

14. Write a program that removes the last element from an array using the `pop` method.
 */

// QUESTION 13

function printFruits(...myFruits){
  const fruits = ["Banana", "Pawpaw"]
  for (let i = 0; i < myFruits.length; i++){
    fruits.push(myFruits[i])
  }
  return fruits
}

console.log(printFruits('Kiwi', 'Orange', 'Apple', 'Grape', 'Pineapple'))

//  QUESTION 14

fruits = ['Kiwi', 'Orange', 'Apple', 'Grape', 'Pineapple'];
const poppedFruits = fruits.pop();
console.log(poppedFruits);