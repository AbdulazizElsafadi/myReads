/* eslint-disable jsx-a11y/anchor-is-valid */
const Search = ({ handleSearchPage }) => {
    return (
        <div className="search-books">
            <div className="search-books-bar">
                <a className="close-search" onClick={() => { handleSearchPage() }}> Close </a>
                <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        placeholder="Search by title, author, or ISBN"
                    />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid"></ol>
            </div>
        </div>
    );
}

export default Search;