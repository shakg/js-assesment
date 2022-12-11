
/**
 * Book class will have book information such as; 
 *  - name 
 *  - author
 *  - pageCount
 */
 class Book{
 
    constructor(name, author, pageCount){
        this.name = name;
        this.author = author;
        this.pageCount = pageCount
    }

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

    constructor(){
        this.library = []
    }

    addBook(book){
        
        let b = new Book(book);
        this.library.push(b);
        console.log(b);
        
    }

    deleteBook(bookName){
        
        this.library.forEach(book => { // compare the bookName with each book and remove if they are the same.
            if(book.name == bookName){
                let index = this.library.indexOf(book);
                if(index >-1){
                    this.library.splice(index, 1);
                }
            }
        })

        this.library.forEach(book => { //return false if the book is still in the array. If not return true.
            if(book.name == bookName){
                return false;
            }else{
                return true;
            }
        })



    }

    updateBook(nameBeforeUpdate, updatedBook){

        this.library.forEach(book => { //return false if the book is still in the array. If not return true.
            if(book.name == nameBeforeUpdate){
                
                book = updatedBook; //change previous version with the new one.

            }
        })

        this.library.forEach(book => { //return true if the updated book is in the array. If not return false.
            if(book.name == updatedBook.name){
                return true;
            }else{
                return false;
            }
        })

    }

    getAllBooks(){// return allBooks array.
        return this.library; 
    }

    getBookWithMostPageNumber(){

        let bookWithMostPages = this.library[0];

        this.library.forEach(book => {//compare all books with the bookwithmostpages and replace if it has more pages.
            
            if(book.pageCount > bookWithMostPages){
                book = bookWithMostPages;
            }
            
        })

        return bookWithMostPages;

    }

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
//console.log(_book);


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
