import { useContext } from "react";
import { CartContext } from "../../App";
import styles from "./Cart.module.css";

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
    <div className={styles.cartContainer}>
      <div className={styles.cart}>
        <h1>Your cart</h1>
        <div className={styles.cartItems}>
          {cart.length !== 0 ? (
            cart.map((item) => (
              <div key={item.id} className={styles.card}>
                <div className={styles.imgContainer}>
                  <img
                    className={styles.image}
                    src={item.image}
                    alt={item.title + " image"}
                  />
                </div>
                <div>
                  <h2>{item.title}</h2>

                  <p>Price: {item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <div className={styles.orderOptions}>
                    <button
                      className={styles.btn}
                      onClick={() => addToCart(item)}
                    >
                      +
                    </button>
                    <button
                      className={styles.btn}
                      onClick={() => removeFromCart(item)}
                    >
                      Delete
                    </button>
                    <button
                      className={styles.btn}
                      onClick={() => decreaseQuantity(item)}
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Your cart is empty</p>
          )}
        </div>
        <div className={styles.orderInfo}>
          <div>
            <h2>Subtotal: {getCartTotal()}$</h2>
            <h2>Tax 20%: {getCartTax()}$</h2>
            <h2>Total: {Number(getCartTotal()) + Number(getCartTax())}$</h2>
          </div>
          <div className={styles.orderOptions}>
            <button className={styles.btn} onClick={clearCart}>
              Clear cart
            </button>
            <button className={styles.btn}>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
