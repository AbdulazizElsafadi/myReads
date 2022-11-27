import ShelfChanger from "./ShelfChanger";
import { Route, Routes } from 'react-router-dom'

// This functional component renders a book...
const Book = ({ Books, handleShelfChanger }) => {
    console.log('we are inside Book')
    return (
        <>
            {Books.map(Book => {
                return (<div className="book">
                    <div className="book-top">
                        <div
                            className="book-cover"
                            style={{
                                width: 128,
                                height: 193,
                                backgroundImage:
                                    `url(${Book.imageLinks ? Book.imageLinks.thumbnail : 'none'})`,
                            }}

                        ></div>
                        <ShelfChanger />
                    </div>
                    <div className="book-title">{Book.title}</div>

                    {Book.authors && Book.authors.map(author =>
                        <div key={author} className="book-authors">{author}</div>)}

                </div>)
            })}

            <Routes   >
                <Route path='/ShelfChanger' element={
                    <ShelfChanger Book={Books} handleShelfChanger={handleShelfChanger} />
                } />
            </Routes>

        </>
    );
};

export default Book;