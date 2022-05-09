import styles from "../styles/Home.module.css";

const Layout = ({ children }) => {
  return (
    <div>
      <article className="grid grid-cols-12">
        <div className="col-span-2 bg-slate-50 p-3">
          <h3 className="text-lg font-mono">sorting algorithms </h3>
        </div>
        <div className="col-span-10 container">
          <main className="flex justify-center items-center mx-10 h-screen">
            <div className="mx-20">{children}</div>
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
      </article>
    </div>
  );
};

export default Layout;
