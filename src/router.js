import { createBrowserRouter } from "react-router-dom";
import { MovieList, Main, TVList } from "./components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/movie",
    element: <MovieList />,
  },
  ,
  {
    path: "/tvs",
    element: <TVList />,
  },
]);

export default router;
