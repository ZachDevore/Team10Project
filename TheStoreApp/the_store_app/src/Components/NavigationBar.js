import { NavLink, useMatch, useResolvedPath } from "react-router-dom";
import {FcDvdLogo} from 'react-icons/fc';
import {BsSearch} from 'react-icons/bs';
import PopUp from "./PopUp";
import "../Styles/navigationBarStyles.css"

export default function NavigationBar() {
    return (
    <>
        <ul className="navBar">
            
            <li> <img src="img/companyLogo.jpg" alt="Company Logo"></img> </li>
            <li> <PopUp /> </li>
            {/* <NavLink className="nav" to="/SignUpPage">Sign in</NavLink>             */}
           <li> <NavLink className="nav" to="/AddProduct">Add Item</NavLink> </li> 
           <li> <NavLink className="nav" to="/AboutPage">About Us</NavLink> </li>
           <li> <NavLink className="nav" to="/">Today's Deals</NavLink> </li>
          
           <li>   <input 
                    className="searchBar"
                    type="text"
                    placeholder="Search" /> 
            </li>
        </ul>
    </>
    );
}
