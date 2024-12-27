import React from "react"
import ReactDom from "react-dom/client"
import Header from "../components/Header"
import resList from "../utils/resList"
import Body from "../components/Body"
console.log(Body)

const App = () =>
    (
        <div>
            <Header />
            <Body />
        </div>
        
    )

const root = ReactDom.createRoot(document.getElementById("root"))

root.render(<App />)