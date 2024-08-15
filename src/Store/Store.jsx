import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Store = () => {
  return (
    <>
      <Header />
      <div>
        <aside>
          <h2>Filters</h2>
          <ul>
            <a href="#">Electronics</a>
            <a href="#">Jewelry</a>
            <a href="#">Mens clothing</a>
            <a href="#">Womens clothing</a>
          </ul>
        </aside>
        <main>
          <div>
            <div>
              <p>Shirt</p>
              <p>amaizng</p>
              <p>500$</p>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Store;
