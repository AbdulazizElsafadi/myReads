// This functional component renders a list of books with in a specified book shelf

import Book from './Book'

const BookList = ({ bookShelf, Books, handleShelfChanger }) => {
    
    // Filter the books with specified bookShelf then map the books
    return (
        <ul className="books-grid">
            {Books.filter(book => book.shelf=== bookShelf).map(book => {
                    return <li key={book.id}>
                        <Book
                            Book={book}
                            handleShelfChanger={handleShelfChanger}
                            Books={Books}
                            />
                    </li>
                })}
        </ul>
    );
};

export default BookList;