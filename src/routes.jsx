import Store from "./components/Store/Store";
import Error from "./components/Error/Error";
import App from "./App";
import Cart from "./components/Cart/Cart";
import About from "./components/AboutUs/About";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/store",
        element: <Store />,
      },
      {
        path: "/store/:category",
        element: <Store />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
];

export default routes;
