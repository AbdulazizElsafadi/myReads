import BookList from "./BookList";

const bookShelfs = ['Currently Reading', 'Want to Read', 'Read'];

const App2 = () => {
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            {bookShelfs.map(bookShelf => {
                return <div key={bookShelf} className="bookshelf">
                    <div className="bookshelf-books">
                        <h2 className="bookshelf-title">{bookShelf}</h2>
                        <BookList bookShelf={bookShelf} />
                    </div>
                </div>
            })}
        </div>

    );
}

export default App2;