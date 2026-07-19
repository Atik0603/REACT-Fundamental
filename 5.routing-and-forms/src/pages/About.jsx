import styles from "../styles/About.module.css";

function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Me</h1>
      <p className={styles.text}>
        Hi! I am Atik, a fullstack web development student based in Finland.
        I am currently learning React, Node.js, PostgreSQL and more.
        I enjoy building projects and solving problems with code.
      </p>
    </div>
  );
}

export default About;