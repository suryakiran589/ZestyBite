import { useSelector } from "react-redux"
import LOGO_URl from "../utils/Image.js"
import {Link} from "react-router-dom"


const Header =() => {
    const cartItems = useSelector((store) => store.cart.items)
    return (
        <div className="flex justify-between items-center px-2 py-1 mx-2 md:px-4 md:py-2 border-b-2 rounded-[10px] m-auto md:mx-5 ">
            <div id="logo">
                <Link to="/"><h3 className="font-poppins font-bold text-orange-400 text-xl">ZestyBite</h3></Link>
            </div>
            <div className="flex " >
                <ul className="flex  text-sm md:text-lg" >
                    <li className="p-1 md:px-3 rounded-md font-poppins hover:bg-orange-300 transition-all md:rounded-lg"><Link to="/">Home</Link></li>
                    <li className="p-1 md:px-3 rounded-md font-poppins hover:bg-orange-300 md:rounded-lg transition-all"><Link to="/about">About</Link></li>
                    {/* <li className="p-3  font-poppins" ><Link to="">contact</Link></li> */}
                    <li className="p-1 md:px-3 rounded-md font-poppins hover:bg-orange-300 md:rounded-lg transition-all"><Link to="/cart">Cart({cartItems.length})</Link></li>
                </ul>
            </div>
        </div>)
}
export default Header