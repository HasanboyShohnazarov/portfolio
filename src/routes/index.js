import {createBrowserRouter} from "react-router-dom"
import Layout from "../layout/Layout"
import HomePage from "../pages/HomePage"
import EducationPage from "../pages/EducationPage"
import ServicesPage from "../pages/ServicesPage"
import AboutPage from "../pages/AboutPage"
import ContactPage from "../pages/ContactPage"
import NotFoundPage from "../pages/NotFoundPage"




export const router = createBrowserRouter([
    {
        element:<Layout/>,
        children:[
            {
                path:"/",
                element: <HomePage/>
            },
            {
                path:"/education",
                element: <EducationPage/>
            },
            {
                path:"/services",
                element: <ServicesPage/>
            },
            {
                path:"/about",
                element: <AboutPage/>
            },
            {
                path:"/contact",
                element: <ContactPage/>
            },
            {
                path:"/*",
                element: <NotFoundPage/>
            },
            
 
        ]
    }
])