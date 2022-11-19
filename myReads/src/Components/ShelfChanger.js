import { useState, useEffect } from "react";

const ShelfChanger = ({ Book, handleShelfChanger }) => {


    const changingBookShelf = (value) => {
        handleShelfChanger(value, Book);
    };

    return (
        <div className="book-shelf-changer">
            <select id="select" onChange={(event) => changingBookShelf(event.target.value)}>

                <option value="none" disabled>
                    Move to...
                </option>
                <option value="currently reading">
                    currently reading
                </option>
                <option value="want to read">want to read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    );
};

export default ShelfChanger;