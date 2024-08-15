import Store from "./Store/Store";
import Home from "./Home/Home";
import Error from "./Error/Error";
import About from "./AboutUs/About";

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "store",
    element: <Store />,
  },
  {
    path: "about",
    element: <About />,
  },
];

export default routes;
