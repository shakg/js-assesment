
/**
 * Book class will have book information such as; 
 *  - name 
 *  - author
 *  - pageCount
 */
class Book{
 // your code goes here.
}


/**
 * Library class will hold all books in library and will have utility functions such as;
 *  - addBook
 *  - deleteBook
 *  - updateBook
 *  - getAllBooks
 *  - getBookWithMostPageNumber
 */
class Library{
    // your code goes here.
}


/**
 * Will use your Library class in below format. write your class accordingly.
 */

// construct library class
const lib = new Library();

// constructs book class
const _book = new Book(
    "Dummy Book Name",
    "Dummy Author Name",
    123
)

// add constructed book to library
// takes book object and returns nothing, aka void function.
lib.addBook(_book);

// update book, takes name of the book, new book object and returns true if update successfull else returns false;
const _bookUpdated = new Book(
    "Dummy Book Name Updated",
    "Dummy Author Name Updated",
    124
)
const updated = lib.updateBook("Dummy Book Name", _bookUpdated);

// delete book, deletes book with taken book name argument. returns true if book successfully deleted else returns false;
const deleted = lib.deleteBook("Dummy Book Name")

// get all books, returns all books in library.
const _allBooks = lib.getAllBooks();

// getBookWithMostPageNumber, returns the book object with the most pageCount
const bookWithMostPageNumber = lib.getBookWithMostPageNumber()

