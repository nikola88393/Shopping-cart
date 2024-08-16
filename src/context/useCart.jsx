import { useState } from "react";

export const useCart = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity = 1) => {
    if (cart.find((item) => item.id === product.id)) {
      setCart(
        cart.map((item) => {
          if (item.id === product.id) {
            return {
              ...item,
              quantity: item.quantity + quantity,
            };
          }
          return item;
        })
      );
      return;
    }
    setCart([...cart, { ...product, quantity: quantity }]);
  };

  const removeFromCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const getCartQuantity = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  return {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    getCartTotal,
    getCartQuantity,
  };
};
