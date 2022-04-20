// import "./index.css";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const SearchBar = ({ handleFormSubmit, handleFormChange, query }) => {
    return (
        <form onSubmit={handleFormSubmit}>
           <TextField id="outlined-size-small" label="Search Here!" defaultValue="Small"
          size="small"  value={query} onChange={handleFormChange} required/> 
            <Button variant="contained" type="submit">Search</Button>
        </form>
    )
}

export default SearchBar;