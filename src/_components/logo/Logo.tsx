import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

import logo from "@/_images/logo.png";

export default function Logo() {
  return (
    <Link href="/" className={styles.logo}>
      <Image
        src={logo}
        width={290}
        height={120}
        alt="logo"
        className={styles.images}
      />
      <p className={styles.text}>healthy ration</p>
    </Link>
  );
}
