import { Outlet, useOutlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
// import Store from "./components/Store/Store";
// import Cart from "./components/Cart/Cart";
// import About from "./components/AboutUs/About";
// import Home from "./components/Home/Home";
function App() {
  const outlet = useOutlet();

  return (
    <>
      <Header />
      {outlet === null ? <Home /> : <Outlet />}
      <Footer />
    </>
  );
}

export default App;
