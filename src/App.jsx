import { Outlet, useOutlet } from "react-router-dom";
import { createContext } from "react";
import { useCart } from "./context/useCart";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";

export const CartContext = createContext();

function App() {
  const outlet = useOutlet();
  const cart = useCart();

  return (
    <>
      <CartContext.Provider value={cart}>
        <Header />
        {outlet === null ? <Home /> : <Outlet />}
        <Footer />
      </CartContext.Provider>
    </>
  );
}

export default App;
