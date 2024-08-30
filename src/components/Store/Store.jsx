import useFakeFetch from "../../useFakeFetch";
import { NavLink, useParams } from "react-router-dom";
import styles from "./Store.module.css";
import { useContext } from "react";
import { CartContext } from "../../App";

const Store = () => {
  const { addToCart } = useContext(CartContext);
  //Destructuring!!!
  const {
    data: products,
    error: productsErr,
    loading: productsLoading,
  } = useFakeFetch("https://fakestoreapi.com/products");

  const {
    data: categories,
    error: categoriesErr,
    loading: categoriesLoading,
  } = useFakeFetch("https://fakestoreapi.com/products/categories");

  const { category } = useParams();

  const addToCartHandler = (product, quantity = 1) => {
    addToCart(product, quantity);
    document.getElementById(`${product.id}`).value = 1;
  };
  const filter = (category) => {
    return products.filter((item) => item.category === category);
  };
  if (productsErr || categoriesErr) {
    return <p>{productsErr}</p>;
  }

  if (productsLoading || categoriesLoading) {
    return <p>Loading...</p>;
  }

  if (!products || !categories) {
    return <p>Could not retrieve data</p>;
  }

  return (
    <>
      <div className={styles.storeContainer}>
        <aside className={styles.productFilters}>
          <h2>Filters</h2>
          <ul className={styles.filters}>
            {categories.map((category) => (
              <NavLink
                key={category}
                to={`/store/${category}`}
                className={({ isActive }) =>
                  isActive ? styles.navLinkActive : styles.navLink
                }
              >
                {category}
              </NavLink>
            ))}
          </ul>
        </aside>
        <main className={styles.productsWrapper}>
          <div className={styles.productsContainer}>
            {category
              ? filter(category).map((item) => (
                  <div key={item.id} className={styles.itemCard}>
                    <img src={item.image} alt={item.title + " image"} />
                    <p>{item.title}</p>
                    <p>{item.price}$</p>
                    <div className={styles.cardOptions}>
                      <button
                        onClick={() => {
                          console.log(document.getElementById(item.id).value);

                          addToCartHandler(
                            item,
                            Number(document.getElementById(item.id).value)
                          );
                        }}
                        className={styles.addToCartBtn}
                      >
                        Add to cart
                      </button>
                      <div>
                        <label htmlFor="qty">Qty:</label>
                        <input
                          className={styles.quantityInput}
                          id={item.id}
                          name="qty"
                          type="number"
                          min="1"
                          max="10"
                          defaultValue={1}
                        />
                      </div>
                    </div>
                  </div>
                ))
              : products.map((item) => (
                  <div key={item.id} className={styles.itemCard}>
                    <img src={item.image} alt={item.title + " image"} />
                    <p>{item.title}</p>
                    <p>{item.price}$</p>
                    <div className={styles.cardOptions}>
                      <button
                        className={styles.addToCartBtn}
                        onClick={() => {
                          addToCartHandler(
                            item,
                            Number(document.getElementById(item.id).value)
                          );
                        }}
                      >
                        Add to cart
                      </button>
                      <div>
                        <label htmlFor="qty">Qty:</label>
                        <input
                          className={styles.quantityInput}
                          id={item.id}
                          name="qty"
                          type="number"
                          min="1"
                          max="10"
                          defaultValue={1}
                        />
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default Store;
