import Store from "./components/Store/Store";
import Home from "./components/Home/Home";
import Error from "./components/Error/Error";
import About from "./components/AboutUs/About";

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
