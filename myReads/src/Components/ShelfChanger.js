
const ShelfChanger = ({ Book, handleShelfChanger }) => {

    const changingBookShelf = (value) => handleShelfChanger(value, Book);

    return (
        <div className="book-shelf-changer">
            <select defaultValue={Book.shelf} id="select" onChange={(event) => changingBookShelf(event.target.value)}>

                <option value="none"  disabled >
                    Move to...
                </option>
                <option value="currentlyReading" >
                    currently reading
                </option>
                <option value="wantToRead" >want to read</option>
                <option value="read" >read</option>
                <option value="none" >none</option>

            </select>
        </div>
    );
};

export default ShelfChanger;