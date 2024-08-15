import Store from "./Store/Store";
import Home from "./Home/Home";
import Error from "./Error/Error";

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
];

export default routes;
