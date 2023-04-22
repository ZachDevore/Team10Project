import { NavLink, useMatch, useResolvedPath } from "react-router-dom";
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
            <NavLink to="/SignUpPage">Sign in</NavLink>            
            <NavLink to="/AddProduct">Add Item</NavLink>
            <NavLink to="/AboutPage">About Us</NavLink> 
            <NavLink to="/">Today's Deals</NavLink>
        </ul>
    </nav>
    );
}
