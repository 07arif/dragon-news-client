import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Category from "../../pages/Category/Category/Category";
import Home from '../../pages/Home/Home/Home'
import Login from "../../pages/Login/Login";
import News from "../../pages/News/News/News";
import Register from "../../pages/Register/Register";
import Profile from "../../pages/Shared/Others/Profile/Profile";
import TermsAndCondition from "../../pages/Shared/Others/TermsAndCondition/TermsAndCondition";
import PrivetRoutes from "../PrivetRoutes/PrivetRoutes";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=> fetch(`https://dragon-news-server-1fmm7llqq-07arif.vercel.app/news`)
            },
            {
                path:'/category/:id',
                element:<Category></Category>,
                loader:({params})=> fetch(`https://dragon-news-server-1fmm7llqq-07arif.vercel.app/category/${params.id}`)
            },
            {
                path:'/news/:id',
                element:<PrivetRoutes><News></News></PrivetRoutes>,
                loader:({params})=> fetch(`https://dragon-news-server-1fmm7llqq-07arif.vercel.app/news/${params.id}`)
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/profile',
                element:<Profile></Profile>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/terms',
                element:<TermsAndCondition></TermsAndCondition>
            }
        ]

    }
])