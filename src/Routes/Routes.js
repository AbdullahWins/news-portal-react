import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Catagory from "../Pages/Catagory/Catagory";
import News from "../Pages/News/News";
import Home from "../Pages/Home/Home";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/catagory/:id",
        element: <Catagory></Catagory>,
      },
      {
        path: "/news/:id",
        element: <News></News>,
      },
    ],
  },
]);
