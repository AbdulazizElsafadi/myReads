import { useState } from "react";
import { search } from "./BooksAPI";
import Book from "./Book";
import { Route, Routes } from 'react-router-dom'

/* eslint-disable jsx-a11y/anchor-is-valid */
const Search = ({ handleSearchPage, Books, handleShelfChanger }) => {

    const [searchedBooks, setSearchedBooks] = useState([]);

    const handleSearch = (value) => {
        // console.log('value:', value)
        if (value) {
            const searchBook = () => search(value, 50)
                .then(books => {
                    assignShelf(books)
                    setSearchedBooks(books)
                })
                .catch(err => console.log(err))
            searchBook();
        }

        else {
            // console.log('we are in the else')
            setSearchedBooks([])
        }
    }

    // console.log('Books in search:',Books)

    const assignShelf = (searchedBooks) => {
        // console.log('we are in assignShelf first')
        // console.log('searchedBooks in assignShelf:', searchedBooks)
        if (!searchedBooks.error) {
            searchedBooks.map(searchedBook => {
                Books.map(book => {
                    // console.log('we are looping in the books')
                    if (book.id === searchedBook.id) {
                        searchedBook.shelf = book.shelf
                        // console.log('***** book that exist: *****', searchedBook)
                    }
                })
                if (!searchedBook.shelf) {
                    searchedBook.shelf = 'none';
                    // console.log(`book that doesn't exist:`, searchedBook)
                }
            })
        }
    }

    return (
        <>
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
                                return <li key={book.id}>
                                    <Book />
                                </li>
                            })}
                    </ol>
                </div>
            </div>

            <Routes>
                <Route path='/Book' element={
                    searchedBooks.map(book => {
                        return <Book Book={book} handleShelfChanger={handleShelfChanger} />
                    })
                }
                />
            </Routes>
        </>
    );
}

export default Search;