import { createBrowserRouter, RouterProvider, Routes } from "react-router-dom";
import Root from "../../components/Root/Root";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import HomePage from "../../pages/HomepAge/HomePage";
import AllEstates from "../../pages/AllEstates/AllEstates"
import Profile from "../../pages/Profile/Profile"
import UpdateProfile from "../../pages/Profile/UpdateProfile"
import SignIn from "../../pages/SignIn/SignIn"
import SignUp from "../../pages/SignUp/SignUp"
import DetailsPage from "../../pages/DetailsPage/DetailsPage";
import PrivateRoute from "./PrivateRoute"
const RouterPaths = () => {

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: "/",
                loader: ()=> fetch('data.json'),
                element: <HomePage></HomePage>
            },
            {
                path: "/allestates",
                loader: ()=> fetch('data.json'),
                element: <AllEstates></AllEstates>
            },
            {
                path: "/estate/:id",
                element:<PrivateRoute><DetailsPage></DetailsPage></PrivateRoute>
            },
            {
                path: "/profile",
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path: "/updateprofile",
                element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
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