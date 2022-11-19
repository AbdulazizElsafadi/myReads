import { useState } from "react";
import { search } from "./BooksAPI";
import Book from "./Book";

/* eslint-disable jsx-a11y/anchor-is-valid */
const Search = ({ handleSearchPage }) => {

    const [searchedBooks, setSearchedBooks] = useState([]);

    const handleSearch = (value) => {
        const searchBook = async () => await search(value, 20)
        .then(books => setSearchedBooks(books))
        .catch(err => console.log(err))
        searchBook();
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
                {searchedBooks !== undefined|| searchedBooks.map(book => {
                    return <li key={book.id}><Book Book={book} /> </li>
                })}
                </ol>
            </div>
        </div>
    );
}

export default Search;