// import {Response} from "./interfaceSearch";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios';
import SearchBar from "../../components/SearchBar"
import GifComponent from "../../components/Gif";
import { query } from "../../data/redux/search-slice";
import { data } from "../../data/redux/data-slice"

const Search = () => {
    const apiKey = process.env.REACT_APP_GIPHY_KEY;
    const currentQuery = useSelector((state) => state.query.value);
    const currentData = useSelector((state) => state.data.value)
    const dispatch = useDispatch();     

    const handleFormOnChange = (e) => {
        dispatch(query(e.target.value));
        
    }


    const handleFormOnSubmit = (e) => {
        e.preventDefault();
        handleGetGifsData();
    }

    //function untuk search
    const handleGetGifsData = async () => {
        const gifs = await
            axios
                .get(
                    `http://api.giphy.com/v1/gifs/search?q=${currentQuery}&api_key=${apiKey}&limit=12`
                )
                .catch((error) => error);
        dispatch(data(gifs.data.data))
        console.log(gifs);
    }

    return (
        <div>
            <div className="search-section">
            <SearchBar  query={currentQuery} handleFormChange={handleFormOnChange} handleFormSubmit={handleFormOnSubmit} />
            </div>
            {currentData !== undefined && (
                <div className="img-giphy">
                    <GifComponent data={currentData} key={currentData.id} />
                </div>) }
        </div>
    )
}

export default Search;