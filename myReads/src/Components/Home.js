import BookList from './BookList'
import { Link } from 'react-router-dom'

const Home = ({ bookShelfs, Books, handleShelfChanger }) => {

    return (
        <div className="app">
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                {bookShelfs.map(bookShelf => {
                    return <BookList key={bookShelf.key}
                        bookShelf={bookShelf}
                        Books={Books}
                        handleShelfChanger={handleShelfChanger} />
                })}
            </div>

            <div className="open-search">
                <Link to='/search'>Add a book</Link>
            </div>
        </div>
    );
};

export default Home;