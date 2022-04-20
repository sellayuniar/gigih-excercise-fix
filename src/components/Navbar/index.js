// import "./index.css";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

const Navbar = () => {
    return (
        <div className="navbar">
            <ul>
                <li><Button variant="contained"><Link className="link" to="/search">Search</Link></Button></li>
                <li><Link className="link" to="/trending">Trending</Link></li>
            </ul>
            
        </div>
    )
}

export default Navbar;