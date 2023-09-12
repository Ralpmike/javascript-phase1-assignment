/**Create an object representing a person with properties 
 * like name, age, and gender. Write a function that displays the person's information.

16. Implement a method within the person object that increments their age by one when called. */


// QUESTION 15

function printPersonalInfo(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender

}

const userDetails1 = new printPersonalInfo("Glory Igara", 18, "female");
console.log(userDetails1);


// QUESTION 16
const user = {
  name: "Erine",
  age: 16,
  grnder: "female",
  incrementAge() {
    this.age++
    return this.age
  }
}


console.log(user.incrementAge())
console.log(user.incrementAge())
console.log(user.incrementAge())