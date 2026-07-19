import styles from "../styles/Home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to MyApp 👋</h1>
      <p className={styles.subtitle}>A simple React app with routing and styled pages.</p>
    </div>
  );
}

export default Home;