import { Link, useMatch, useResolvedPath } from "react-router-dom";
import {FcDvdLogo} from 'react-icons/fc';
import {BsSearch} from 'react-icons/bs';
import PopUp from "./PopUp";
import CartWidget from "./CartWidget";
import AboutPage from "../Pages/AboutPage";
import UserNameWidget from "./UserNameWidget"
import {stateUser, useGlobalState} from "../globalState"

export default function NavigationBar() {
    const [userData, setUserData] = useGlobalState(stateUser);

    return (
    <nav className="nav">
        <table style={{width:"100%",borderBottom:"2px solid white"}}>
            <colgroup>
                <col style={{width:"10%"}}></col>
                <col style={{width:"40%"}}></col>
                <col style={{width:"20%"}}></col>
                <col style={{width:"10%"}}></col>
                <col style={{width:"10%"}}></col>
                <col style={{width:"10%"}}></col>
            </colgroup>
            <tr>
                <td style={{verticalAlign:"top",paddingTop:"3px",paddingLeft:"5px"}}><img src="img/thestoreapp-logo.png"/></td>
                <td>
                    <ul>
                        
                        <Link style={{color: "white"}} to="/">Home</Link>&nbsp;&nbsp;
                        <Link style={{color: "white"}} to="/AboutPage">About Us</Link>&nbsp;&nbsp;
                        <Link style={{color: "white"}} to="/signin">Sign in</Link>&nbsp;&nbsp;         
                        <Link style={{color: "white"}} to="/cart">My Cart</Link>&nbsp;&nbsp;
                        <Link style={{color: "white"}} to="/">Today's Deals</Link>&nbsp;&nbsp;
                        <Link style={{color: "white", display: userData.isAdmin ? "inline" : "none"}} to="/addProduct">Add Product</Link>
                    </ul>
                </td>
                <td><span><input type="text" size="20"></input> <BsSearch /></span></td>
                <td><PopUp /></td>
                <td style={{verticalAlign:"top",textAlign:"right",paddingTop:"10px",paddingRight:"5px"}}><UserNameWidget /></td>
                <td style={{verticalAlign:"top",textAlign:"right",paddingTop:"3px",paddingRight:"5px"}}><CartWidget /></td>
            </tr>
        </table>
    </nav>
    );
}
