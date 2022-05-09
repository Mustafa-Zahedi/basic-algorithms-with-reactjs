import styles from "../styles/Home.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className="text-3xl">Sorting algorithms with react.js</h1>
        <div className="my-3">{children}</div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://github.com/Mustafa-Zahedi"
          target="_blank"
          rel="noopener noreferrer"
        >
          made by <span className="text-xl font-medium mx-2">Zahedi</span>
        </a>
      </footer>
    </div>
  );
};

export default Layout;
