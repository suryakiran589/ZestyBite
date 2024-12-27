import LOGO_URl from "../utils/Image.js"

const Header =() => 
    (
        <div className="header">
            <div id="logo">
                <img src={LOGO_URl}></img>
            </div>
            <div id ="info">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>)
export default Header