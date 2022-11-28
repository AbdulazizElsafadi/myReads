import { useState } from "react";
import { search } from "./BooksAPI";
import Book from "./Book";
import { Link } from 'react-router-dom'

const Search = ({ Books, handleShelfChanger }) => {

    const [searchedBooks, setSearchedBooks] = useState([]);

    const handleSearch = (value) => {
        if (value) {
            const searchBook = () => search(value, 50)
                .then(books => {
                    assignShelf(books)
                    setSearchedBooks(books)
                })
                .catch(err => console.log(err))
            searchBook();
        }
        else setSearchedBooks([])
    }

    const assignShelf = (searchedBooks) => {
        if (!searchedBooks.error) {
            searchedBooks.map(searchedBook => {
                Books.map(book => {
                    if (book.id === searchedBook.id) {
                        searchedBook.shelf = book.shelf
                    }
                })
                if (!searchedBook.shelf) {
                    searchedBook.shelf = 'none';
                }
            })
        }
    }

    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link className="close-search" to='/'> Close </Link>
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
                    {searchedBooks.length === undefined || searchedBooks.error === 'empty query' ? <h1>No Books found</h1> :
                        searchedBooks.map(book => {
                            return <li key={book.id}>
                                <Book Book={book} handleShelfChanger={handleShelfChanger} />
                            </li>
                        })}
                </ol>
            </div>
        </div>
    );
}

export default Search;