import styles from "../styles/Contact.module.css";

function Contact() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact</h1>
      <p className={styles.info}>📧 Email: atik@example.com</p>
      <p className={styles.info}>📞 Phone: +358 40 123 4567</p>
      <p className={styles.info}>📍 Address: Mikkeli, Finland</p>
    </div>
  );
}

export default Contact;