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
        loader: () => fetch("http://localhost:5000/news"),
      },
      {
        path: "/catagories/:id",
        element: <Catagory></Catagory>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/catagories/${params.id}`),
      },
      {
        path: "/news/:id",
        element: <News></News>,
        loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`),
      },
    ],
  },
]);
