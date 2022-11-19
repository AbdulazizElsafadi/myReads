/* eslint-disable jsx-a11y/anchor-is-valid */
import BookList from "./BookList";
import { useState } from "react";
import Search from "./Search";

const bookShelfs = ['Currently Reading', 'Want to Read', 'Read'];

const App2 = () => {

    const [showSearchPage, setShowSearchPage] = useState(false);

    const handleSearchPage = () => setShowSearchPage(!showSearchPage);

    return (

        <div className="app">
            {showSearchPage ? (
                <Search handleSearchPage={handleSearchPage} />
            ) : (
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

                    <div className="open-search">
                        <a onClick={() => setShowSearchPage(!showSearchPage)}>Add a book</a>
                    </div>

                </div>

            )}

        </div>
    );
}

export default App2;