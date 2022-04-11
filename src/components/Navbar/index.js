import "./index.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <ul>
                <li><Link className="link" to="/search">Search</Link></li>
                <li><Link className="link" to="/trending">Trending</Link></li>
            </ul>
            
        </div>
    )
}

export default Navbar;