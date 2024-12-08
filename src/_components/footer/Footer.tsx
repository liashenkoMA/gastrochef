import Link from "next/link";
import Image from "next/image";

import styles from "./page.module.css";
import logo from "@/_images/logo.png";

export default function Page() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.menu}>
          <ul className={styles.lists}>
            <li className={styles.list}>
              <Link href="/" className={styles.link}>
                Програмы питания
              </Link>
            </li>

            <li className={styles.list}>
              <Link href="/" className={styles.link}>
                О нас
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
                Блог
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.logo}>
          <Image
            src={logo}
            width={422}
            height={180}
            className={styles.image}
            alt="logo"
          />
          <p className={styles.text}>сервис здорового питания</p>
        </div>

        <div className={styles.social}>
          <ol className={styles.lists}>
            <li className={styles.list}>
              <Link href="/" className={styles.link}>
                Условия сотрудничества
              </Link>
            </li>
            <li className={styles.list}>
              <Link href="/" className={styles.link}>
                FAQ
              </Link>
            </li>
            <li className={styles.list}>
              <Link href="/" className={styles.link}>
                <span className={styles.text_color}>
                  +38 (068) 949 - 49 - 19
                </span>
              </Link>
            </li>
          </ol>
        </div>
      </div>
    </footer>
  );
}
