# js-assesment
Asessment for candidates

# What is this? 
This is a simple object orianted coding assesment. You need to follow instructions to build a simple library system while following object oriented programming paradigms. 

# About the assesment
 - You need to build it using javascript programming language.
 - Your program needs to be runnable with nodejs runtime. `node index.js`
 - Your program needs to have basic control flow to enable users to input things. (In an infinite loop, your program needs to ask user a command, based on that command your program needs to do something, informs user and returns to beginning of the loop)
    - Commands user can input
      - List all books in library
      - Add book to library
      - Delete book from library
      - Get latest books (takes number and returns last added books in that count)
      - Update book
      - Get books from same author
      - Get book with most page number
 - Your program *doesn't* need to store data in file or database. You can store this data in memory.
 - Your program has to have a test file that tests functions of written program (aka unit tests).
   - You can use jest or other testing frameworks or you can just use plain javascript.
 - Your program needs to follow object oriented programming paradigms.
 
 # Additional information
  - Book object has following properties
    - ID
    - Author
    - Addition Date (addition date to library)
    - Name
    - Page
  - Library object can be Array, Set or Map 
  - You can grant to add book if book exist in the library. (aka book names are unique)
