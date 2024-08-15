import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import useFakeFetch from "../../useFakeFetch";
import { NavLink } from "react-router-dom";
import styles from "./Store.module.css";

const Store = () => {
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
      <Header />
      <div className={styles.storeContainer}>
        <aside className={styles.productFilters}>
          <h2>Filters</h2>
          <ul className={styles.filters}>
            {categories.map((category) => (
              <NavLink key={category} to={category}>
                {category}
              </NavLink>
            ))}
          </ul>
        </aside>
        <main className={styles.productsWrapper}>
          <div className={styles.productsContainer}>
            {products.map((item) => (
              <div key={item.id} className={styles.itemCard}>
                <img src={item.image} alt={item.title + " image"} />
                <p>{item.title}</p>
                <p>{item.price}$</p>
                <button>Add to cart</button>
                <input type="number" min="1" max="10" defaultValue={1} />
              </div>
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Store;
