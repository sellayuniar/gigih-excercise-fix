import "./index.css";
const SearchBar = ({ handleFormSubmit, handleFormChange, query }) => {
    return (
        <form onSubmit={handleFormSubmit}>
            <input type="text" value={query} onChange={handleFormChange} placeholder="search here!" required />
            <button className="fa fa-search" type="submit"></button>
        </form>
    )
}

export default SearchBar;