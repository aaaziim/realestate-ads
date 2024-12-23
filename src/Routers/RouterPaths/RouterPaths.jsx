import { createBrowserRouter, RouterProvider, Routes } from "react-router-dom";
import Root from "../../components/Root/Root";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import HomePage from "../../pages/HomepAge/HomePage";

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
            }
        ]
    },
])
return (
    <RouterProvider router={routes}>

    </RouterProvider>
);
};

export default RouterPaths;