import { useState } from "react";
import { search } from "./BooksAPI";
import Book from "./Book";

/* eslint-disable jsx-a11y/anchor-is-valid */
const Search = ({ handleSearchPage, Books }) => {

    const [searchedBooks, setSearchedBooks] = useState([]);

    const handleSearch = (value) => {
        const searchBook = async () => await search(value, 20)
            .then(books => setSearchedBooks(books))
            .then(assignShelf())
            .then(console.log('searchedBooks11111:',searchedBooks))
            .catch(err => console.log(err))
        searchBook();
    }

    const assignShelf = () => {
        searchedBooks.map(searchedBook => {
            if (!searchedBook.shelf) {
                Books.map(book => {
                    if (book.id === searchedBook.id) {
                        searchedBook.shelf = book.shelf
                        console.log('book that exist:', searchedBook)
                    } else {
                        searchedBook.shelf = 'none';
                        console.log('book that doesnt exist:', searchedBook)
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
                    {searchedBooks === undefined || searchedBooks.error === 'empty query' ? <h1>No Books found</h1> :
                        searchedBooks.map(book => {
                            return <li key={book.id}><Book Book={book} /> </li>
                        })}
                </ol>
            </div>
        </div>
    );
}

export default Search;