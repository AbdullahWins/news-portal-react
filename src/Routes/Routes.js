import { Children } from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main> ,
        // Children: [
        //     {
        //         path: '/',
        //         element:
        //     },
        //     {
        //         path: '/',
        //         element:
        //     },
        //     {
        //         path: '/',
        //         element:
        //     }
        // ]
    }
]);
