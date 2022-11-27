/* eslint-disable jsx-a11y/anchor-is-valid */
import "../App.css";
import { getAll, update } from './BooksAPI'
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import BookList from "./BookList";
import Search from "./Search";

const bookShelfs = [
    { title: 'Read', key: 'read' },
    { title: 'Want To Read', key: 'wantToRead' },
    { title: 'Currently Reading', key: 'currentlyReading' }

];

const App = () => {

    // const [showSearchPage, setShowSearchPage] = useState(false);
    // const handleSearchPage = () => setShowSearchPage(!showSearchPage);

    const [books, setBooks] = useState([]);

    const handleShelfChanger = (shelf, book) => {
        // console.log('book:', book)
        const updateBook = async () => await update(book, shelf)
        updateBook();
    }

    // I am adding the books dependency because I want the page to refresh when a user updates
    // a shelf of a book
    useEffect(() => getAll().then(allBooks => setBooks(allBooks)), []);

    // console.log('books global:', books);
    return (
        <Routes>
            <Route exact path='/' element={
                <BookList
                    bookShelfs={bookShelfs}
                    Books={books}
                    handleShelfChanger={handleShelfChanger} />

            } />
            <Route path='search' element={
                <Search
                    // handleSearchPage={handleSearchPage}
                    Books={books}
                    handleShelfChanger={handleShelfChanger} />
            } />

            <Route path="*" element={<h1>The page wasn't found</h1>} />
        </Routes>
    );
}

export default App;