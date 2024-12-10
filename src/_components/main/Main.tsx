import styles from "./page.module.css";

import Description from "../description/Description";
import ProgramChef from "../programChef/ProgramChef";

export default function Main() {
  return (
    <main className={styles.main}>
      <Description />
      <ProgramChef />
    </main>
  );
}
