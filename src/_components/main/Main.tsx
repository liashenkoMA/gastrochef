import styles from "./page.module.css";

import Description from "../description/Description";

export default function Page() {
  return (
    <main className={styles.main}>
      <Description />
    </main>
  );
}
