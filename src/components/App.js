import React from "react"
import ReactDom from "react-dom/client"
import Header from "./Header"
import Body from "./Body"
import About from "./About"
import {createBrowserRouter, RouterProvider,Outlet,Link} from "react-router-dom"
import ResMenu from "./ResMenu"
import { Provider } from "react-redux"
import appStore from "../utils/appStore"
import Cart from "./Cart"

const App = () =>
    (
        <Provider store={appStore}>
        <div className="">
            <Header />
            <Outlet />
        </div>
        </Provider>
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
        },
        {
            path:"/restaurants/:id",
            element:< ResMenu/>
        },
        {
            path:"/cart",
            element:< Cart/>
        }
    ]
    }
    
])
const root = ReactDom.createRoot(document.getElementById("root"))

root.render(<RouterProvider  router={appRoute}/>)