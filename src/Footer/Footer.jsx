import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>Logo</div>
      <div>
        <h3>Useful Links</h3>
        <ul>
          <p>Blah Blah</p>
          <p>Blah Blah</p>
          <p>Why choose us?</p>
          <p>FAQ</p>
        </ul>
      </div>
      <div>
        <h3>Contact</h3>
        <ul>
          <p>Abous us</p>
          <p>Email</p>
          <p>Address</p>
          <p>Phone</p>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
