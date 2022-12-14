import "./App.css";
import { getAll, update } from "./Components/BooksAPI";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Search from "./Components/Search";

const bookShelfs = [
  { title: "Currently Reading", key: "currentlyReading" },
  { title: "Want To Read", key: "wantToRead" },
  { title: "Read", key: "read" },
];

const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => getAll().then((allBooks) => setBooks(allBooks)));

  const handleShelfChanger = (shelf, book) => {
    const updateBook = async () => await update(book, shelf);
    updateBook();
  };

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <Home
            bookShelfs={bookShelfs}
            Books={books}
            handleShelfChanger={handleShelfChanger}
          />
        }
      />
      <Route
        path="search"
        element={
          <Search Books={books} handleShelfChanger={handleShelfChanger} />
        }
      />

      <Route path="*" element={<h1>The page wasn't found</h1>} />
    </Routes>
  );
};
export default App;
