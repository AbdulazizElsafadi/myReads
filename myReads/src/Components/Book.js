import ShelfChanger from "./ShelfChanger";

// This functional component renders a book...
const Book = ({ Book, handleShelfChanger }) => {

    return (
        <div className="book">
            <div className="book-top">
                <div
                    className="book-cover"
                    style={{
                        width: 128,
                        height: 193,
                        backgroundImage:
                            `url(${Book.imageLinks.thumbnail})`,
                    }}

                ></div>
                <ShelfChanger Book={Book} handleShelfChanger={handleShelfChanger}/>
            </div>
            <div className="book-title">{Book.title}</div>

            {Book.authors.map(author =>
                <div key={author} className="book-authors">{author}</div>)}

        </div>

    );
};

export default Book;