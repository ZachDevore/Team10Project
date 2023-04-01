import { Link, useMatch, useResolvedPath } from "react-router-dom";
import {FcDvdLogo} from 'react-icons/fc';
import {BsSearch} from 'react-icons/bs';
import PopUp from "./PopUp";
export default function NavigationBar() {
    return (
    <nav className="nav">
         <FcDvdLogo size={80}/>
         <div className="search">
         <BsSearch />
        <input className="searchBar"></input>
        </div>
        <ul>
            <PopUp />
            <Link to="/">Sign in</Link>            
            <Link to="/">My Cart</Link>
            <Link to="/">About Us</Link> 
            <Link to="/">Today's Deals</Link>
        </ul>
    </nav>
    );
}
