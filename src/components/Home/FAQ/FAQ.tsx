import Link from "next/link";
import styles from "./FAQ.module.scss";

function FAQ() {
  return (
    <div className={styles.faq}>
      <p className={styles.title}>
        All of your questions <br />
        solved in one place
      </p>
      <Link href={"/faq"} className={styles.link}>
        FAQ’s
      </Link>
    </div>
  );
}

export default FAQ;
