
/**
 * Book class will have book information such as; 
 *  - name 
 *  - author
 *  - pageCount
 */
class Book{

     constructor(name, author, pageCount) {
        this.name = name;
        this.author = author;
        this.pageCount = pageCount;
    }
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
    
    books = [];

    // Add book to library
    addBook(book) {
        this.books.push(book);
    }

    // Delete book from library
    deleteBook(bookname) {
        this.books = this.books.filter(el => el.name != bookname);
    }

    // Update given named book
    updateBook(bookname) {
        let isFound = false;
        if(this.books.find(el => el.name == bookname)) {
            isFound = true;
        }

        if(isFound) {
            let b = this.books.find(el => el.name == bookname); 
            console.log(b.pageCount);
            b.name = prompt("Enter name of the book: ");
            b.author = prompt("Enter author of the book: ");
            b.pageCount = parseInt(prompt("Enter page count of the book: "));
        }

        return isFound;
    }

    // Return all books in the library
    getAllBooks() {
        return this.books
    }

    // Get book with most page number method
    getBookWithMostPageNumber() {
        let pageNumber = -1;
        let index = -1;
        for(let i = 0; i<this.books.length; i++) {
            if(this.books[i].pageCount > pageNumber) {
                pageNumber = this.books[i].pageCount;
                index = i;
            }
        }

        return this.books[index];
    }


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

