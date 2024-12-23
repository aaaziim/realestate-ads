import { createBrowserRouter, RouterProvider, Routes } from "react-router-dom";
import Root from "../../components/Root/Root";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import HomePage from "../../pages/HomepAge/HomePage";
import AllEstates from "../../pages/AllEstates/AllEstates"
import Profile from "../../pages/Profile/Profile"
import UpdateProfile from "../../pages/Profile/UpdateProfile"
import SignIn from "../../pages/SignIn/SignIn"
import SignUp from "../../pages/SignUp/SignUp"
const RouterPaths = () => {

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: "/",
                element: <HomePage></HomePage>
            },
            {
                path: "/allestates",
                element: <AllEstates></AllEstates>
            },
            {
                path: "/profile",
                element: <Profile></Profile>
            },
            {
                path: "/updateprofile",
                element: <UpdateProfile></UpdateProfile>
            },
            {
                path: "/login",
                element: <SignIn></SignIn>
            },
            {
                path: "/register",
                element: <SignUp></SignUp>
            },

        ]
    },
])
return (
    <RouterProvider router={routes}>

    </RouterProvider>
);
};

export default RouterPaths;