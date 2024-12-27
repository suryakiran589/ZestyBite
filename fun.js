import React from "react"
import ReactDom from "react-dom/client"


const Header =() => 
(
    <div className="header">
        <div id="logo">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKKdlNSyO831VQzABs2_7phbKaUXziEiWXzg&s"></img>
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
const App = () =>
    (
        <div>
            <Header />
            
        </div>
        
    )

const root = ReactDom.createRoot(document.getElementById("root"))

root.render(<App />)