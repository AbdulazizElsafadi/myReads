import Book from './Book'
import { Route, Routes } from 'react-router-dom'

// This functional component renders a list of books with in a specified book shelf

const BookList = ({ bookShelf, Books, handleShelfChanger }) => {

    console.log('Books in BookList:', Books)
    console.log('bookShelf in BookList:', bookShelf)
    console.log('handleShelfChanger in BookList:', handleShelfChanger)


    // Filter the books with specified bookShelf then map the books
    return (
        <>
            <ul className="books-grid">

                {Book || Books.filter(book => book.shelf === bookShelf).map(book => {
                    return <li key={book.id}>
                        <Book />
                    </li>
                })}
            </ul>
            <Routes>
                <Route path='/Book' element={
                    Books.filter(book => book.shelf === bookShelf).map(book => {
                        return <Book
                            Book={book}
                            handleShelfChanger={handleShelfChanger}
                            Books={Books} />
                    }
                    )}
                />

            </Routes>
        </>
    );
};

export default BookList;