import Book from './Book'

const BookList = ({ bookShelf, Books, handleShelfChanger }) => {
    return (
        <div className="bookshelf">
            <div className="bookshelf-books">
                <h2 className="bookshelf-title">{bookShelf.title}</h2>
                <ul className="books-grid">
                    {Books.filter(book => book.shelf === bookShelf.key).map(book => {
                        return <li key={book.id}>
                            <Book Book={book} handleShelfChanger={handleShelfChanger} />
                        </li>
                    })}
                </ul>
            </div>
        </div>
    );
}
export default BookList