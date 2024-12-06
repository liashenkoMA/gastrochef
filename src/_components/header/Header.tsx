import Logo from "../logo/Logo";
import Menu from "../menu/Menu";
import styles from "./page.module.css";

export default function Page() {
  return (
    <header className={styles.header}>
      <div className={styles.background}></div>
      <div className={styles.menu}>
        <Logo />
        <Menu />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Кето питание -
          <span className={styles.text__color}> вкусное и экстремальное </span>
          быстрое похудение
        </h1>
        <p className={styles.text}>4 приема пищи.</p>
        <div className={styles.form}>
          <button type="button" className={styles.button}>
            Заказать
          </button>
          <div>
            <p className={styles.text}>Пробный день</p>
            <p className={styles.text}>
              <span className={styles.text__size}>от 490 руб</span>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
