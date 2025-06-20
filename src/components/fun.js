import React from "react"
import ReactDom from "react-dom/client"
import Header from "../components/Header"
import Body from "./Body"
import About from "./About"
import {createBrowserRouter, RouterProvider,Outlet,Link} from "react-router-dom"


const App = () =>
    (
        <div>
            <Header />
            <Outlet />
        </div>
        
    )

const appRoute = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[{
            path:"/",
            element:<Body />
        },
        {
            path:"/about",
            element:<About />
        }
    ]
    }
    
])
const root = ReactDom.createRoot(document.getElementById("root"))

root.render(<RouterProvider  router={appRoute}/>)