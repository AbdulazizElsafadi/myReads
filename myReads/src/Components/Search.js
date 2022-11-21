import { useState } from "react";
import { search } from "./BooksAPI";
import Book from "./Book";

/* eslint-disable jsx-a11y/anchor-is-valid */
const Search = ({ handleSearchPage, Books }) => {

    const [searchedBooks, setSearchedBooks] = useState([]);

    const handleSearch = (value) => {
        console.log('value:', value)
        if (value) {
            const searchBook = () => search(value, 30)
                .then(books => setSearchedBooks(books))
                .then(assignShelf)
                .catch(err => console.log(err))
            searchBook();
        }
    }


    const assignShelf = () => {
        console.log('we are in assignShelf')
        searchedBooks.map(searchedBook => {
            console.log('searchedBook.shelf:', searchedBook.shelf)
            if (!searchedBook.shelf) {
                Books.map(book => {
                    if (book.id === searchedBook.id) {
                        searchedBook.shelf = book.shelf
                        console.log('book that exist:', searchedBook)
                    } else {
                        searchedBook.shelf = 'none';
                        console.log(`book that doesn't exist:`, searchedBook)
                    }

                })
            }
        })
    }

    return (
        <div className="search-books">
            <div className="search-books-bar">
                <a className="close-search" onClick={() => { handleSearchPage() }}> Close </a>
                <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        placeholder="Search by title, author, or ISBN"
                        onChange={(event) => handleSearch(event.target.value)}
                    />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {/* {console.log('type of searchedBooks:', searchedBooks)} */}
                    {searchedBooks.length === undefined || searchedBooks.error === 'empty query' ? <h1>No Books found</h1> :
                        searchedBooks.map(book => {
                            // console.log(`${book.title}: imageLink: ${JSON.stringify(book.imageLinks)}`)
                            return <li key={book.id}><Book Book={book} /> </li>
                        })}
                </ol>
            </div>
        </div>
    );
}

export default Search;