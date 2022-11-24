/* eslint-disable jsx-a11y/anchor-is-valid */
import "../App.css";
import { getAll, update } from './BooksAPI'
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import BookList from "./BookList";
import Search from "./Search";

const bookShelfs = ['currentlyReading', 'wantToRead', 'read'];

const App = () => {

    const [showSearchPage, setShowSearchPage] = useState(false);
    const handleSearchPage = () => setShowSearchPage(!showSearchPage);

    const [books, setBooks] = useState([]);


    const handleShelfChanger = (shelf, book) => {
        // console.log('book:', book)
        const updateBook = async () => await update(book, shelf)
        updateBook();
    }

    // I am adding the books dependency because I want the page to refresh when a user updates
    // a shelf of a book
    useEffect(() => getAll().then(allBooks => setBooks(allBooks)), [books]);

    // console.log('books global:', books);

    return (

        <div className="app">
            {showSearchPage ? (
                <Routes>
                    <Route path='search' element={
                        <Search handleSearchPage={handleSearchPage} Books={books} handleShelfChanger={handleShelfChanger} />
                    } />
                </Routes>
            ) : (
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    {bookShelfs.map(bookShelf => {
                        return <div key={bookShelf} className="bookshelf">
                            <div className="bookshelf-books">
                                <h2 className="bookshelf-title">{bookShelf}</h2>
                                <Routes>
                                    <Route path='*' element={
                                        <BookList bookShelf={bookShelf} Books={books} handleShelfChanger={handleShelfChanger} />
                                    } />
                                </Routes>
                            </div>
                        </div>
                    })}

                    <div className="open-search">
                        <a onClick={() => setShowSearchPage(!showSearchPage)}>Add a book</a>
                    </div>

                </div>

            )}

        </div>
    );
}

export default App;