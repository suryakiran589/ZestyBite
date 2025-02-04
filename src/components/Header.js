import LOGO_URl from "../utils/Image.js"
import {Link} from "react-router-dom"
const Header =() => 
    (
        <div className="header">
            <div id="logo">
                <img src={LOGO_URl}></img>
            </div>
            <div id ="info">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="">contact</Link></li>
                    <li><Link to="">Cart</Link></li>
                </ul>
            </div>
        </div>)
export default Header