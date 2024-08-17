import { useContext } from "react";
import { CartContext } from "../../App";

const Cart = () => {
  const {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    getCartTotal,
    getCartTax,
    decreaseQuantity,
  } = useContext(CartContext);
  return (
    <div>
      <h1>Your cart</h1>
      <div>
        {cart.length !== 0 ? (
          cart.map((item) => (
            <div key={item.id}>
              <h2>{item.title}</h2>
              <p>Price: {item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => addToCart(item)}>+</button>
              <button onClick={() => removeFromCart(item)}>Delete</button>
              <button onClick={() => decreaseQuantity(item)}>-</button>
            </div>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
      <h2>Subtotal: {getCartTotal()}$</h2>
      <h2>Tax 20%: {getCartTax()}$</h2>
      <h2>Total: {Number(getCartTotal()) + Number(getCartTax())}$</h2>
      <button onClick={clearCart}>Clear cart</button>
      <button>Checkout</button>
    </div>
  );
};

export default Cart;
