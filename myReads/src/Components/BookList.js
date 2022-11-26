import Book from './Book'
import { Route, Routes } from 'react-router-dom'

// This functional component renders a list of books with in a specified book shelf

const BookList = ({ bookShelf, Books, handleShelfChanger }) => {

    // Filter the books with specified bookShelf then map the books
    return (
        <>
            <ul className="books-grid">
                {console.log('Books in BookList',Books)}
                {Books.filter(book => book.shelf === bookShelf).map(book => {
                    return <li key={book.id}>
                        <Book
                            Book={book}
                            handleShelfChanger={handleShelfChanger}
                            Books={Books}
                        />
                    </li>
                })}
            </ul>
            <Routes>
                <Route path='/Book' element={<Book />} />
            </Routes>
        </>
    );
};

export default BookList;