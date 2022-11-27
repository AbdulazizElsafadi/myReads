import Book from './Book'
import { Link, Route, Routes } from 'react-router-dom'

// This functional component renders a list of books with in a specified book shelf

const BookList = ({ bookShelfs, Books, handleShelfChanger }) => {

    // This file should be changed to Home :)

    // console.log('Books in BookList:', Books)
    // console.log('bookShelf in BookList:', bookShelfs)
    // console.log('handleShelfChanger in BookList:', handleShelfChanger)


    // Filter the books with specified bookShelf then map the books
    return (
        <>
            <Routes>
                <Route path='/Book' element={
                    <Book
                        Books={Books}
                        handleShelfChanger={handleShelfChanger} />}
                />

            </Routes>
            <div className="app">
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    {bookShelfs.map(bookShelf => {
                        // This return statement causes the err in Q1
                        return (<div key={bookShelf.key} className="bookshelf">
                            <div className="bookshelf-books">
                                <h2 className="bookshelf-title">{bookShelf.title}</h2>
                                <ul className="books-grid">
                                    {Book || Books.filter(book => book.shelf === bookShelf.key).map(book => {
                                        return <li key={book.id}>
                                            {/* Q3: is it possible to use Book Comp after we've define it
                                                above in the router? Do we need to pass the props again? */}
                                            <Book Books={Books} handleShelfChanger={handleShelfChanger} />
                                        </li>
                                    })}
                                </ul>
                            </div>
                        </div>)

                    })}
                </div>

                <div className="open-search">
                    <Link to='/search'>Add a book</Link>
                </div>
            </div>
        </>
    );
};

export default BookList;