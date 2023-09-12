/**Create a program that asks the user to enter a day of the week (e.g., "Monday"). 
 * Use a switch statement to display a message based on the day entered 
 * (e.g., "It's a workday" for Monday, "It's the weekend" for Saturday and Sunday). */

const dayOfTheWeek = "wednesday";

switch (dayOfTheWeek) {
  case 'monday' :
  case 'tuesday':
  case 'wednesday':
  case 'thursdays':
  case 'friday':
    console.log("It's a workday");
    break
  case "saturday":
  case "sunday":
    console.log("It's the weekend");
}