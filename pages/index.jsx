import Head from "next/head";
import styles from "../styles/Home.module.css";
import Insertion from "./insertion";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Algorithms with react.js</h1>
        <div className="my-5"></div>
        <Insertion />
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
}
