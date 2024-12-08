import styles from "./page.module.css";

import Link from "next/link";

export default function Menu() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.lists}>
        <li className={styles.list}>
          <Link href="/" className={styles.link}>
            Програмы питания
          </Link>
        </li>
        <li className={styles.list}>
          <Link href="/" className={styles.link}>
            Бизнес-ланчи
          </Link>
        </li>
        <li className={styles.list}>
          <Link href="/" className={styles.link}>
            Gastro Shop
          </Link>
        </li>
        <li className={styles.list}>
          <Link href="/" className={styles.link}>
            О нас
          </Link>
        </li>
        <li className={styles.list}>
          <Link href="/" className={styles.link}>
            Блог
          </Link>
        </li>
      </ul>
    </nav>
  );
}
