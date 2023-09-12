/****Destructuring Assignments:**

19. Given an object representing a book with properties like title, author,
 and publication year, use destructuring to extract and display these properties.
 */

 const bookDescription = {
  title: "Things fall apart.",
  author: " Chinua Achebe",
  publication: 1958
 }

 const {title: bookTitle, 
  author: Authors_name, 
  publication: year_of_publication} = bookDescription;  /**changing the default properties to a new one */
 
 
  console.log(bookTitle)    
 console.log(Authors_name)
 console.log(year_of_publication)
