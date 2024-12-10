import styles from "./page.module.css";

export default function ProgramChef() {
  return (
    <section className={styles.programChef}>
      <div className={styles.programms__button}>
        <button type="button" className={styles.button}>
          Программы питания
        </button>
        <button
          type="button"
          className={`${styles.button} ${styles.button_type_action}`}
        >
          Специальные программы
        </button>
      </div>

      <div className={styles.programm}>
        <button type="button" className={styles.programm__button}>
          <span className={styles.button_mainText}>Express Fit</span>
          <span className={styles.button_kkalText}>800 ккал</span>
        </button>
        <button type="button" className={styles.programm__button}>
          <span className={styles.button_mainText}>slim</span>
          <span className={styles.button_kkalText}>800 ккал</span>
        </button>
        <button type="button" className={styles.programm__button}>
          <span className={styles.button_mainText}>fitness</span>
          <span className={styles.button_kkalText}>800 ккал</span>
        </button>
        <button type="button" className={styles.programm__button}>
          <span className={styles.button_mainText}>balance</span>
          <span className={styles.button_kkalText}>800 ккал</span>
        </button>
        <button type="button" className={styles.programm__button}>
          <span className={styles.button_mainText}>balance +</span>
          <span className={styles.button_kkalText}>800 ккал</span>
        </button>
        <button
          type="button"
          className={`${styles.programm__button} ${styles.programm__button_type_action}`}
        >
          <span className={styles.button_mainText}>strong</span>
          <span className={styles.button_kkalText}>800 ккал</span>
        </button>
        <button type="button" className={styles.programm__button}>
          <span className={styles.button_mainText}>maxi fit</span>
          <span className={styles.button_kkalText}>800 ккал</span>
        </button>
      </div>

      <div className={styles.programDescription_content}>
        <div className={styles.programDescription}>
          <div className={styles.programDescription_info}>
            <div className={styles.programDescription_header}>
              <h2 className={styles.title}>FITNESS</h2>
              <p className={styles.title_text}>1300 ккал</p>
            </div>
            <p className={styles.text}>
              Программа здорового питания Express Fit. Идеально для: похудения в
              кратчайшие сроки, повышения энергии и сил, снижения веса при
              сидячем образе жизни.
            </p>
          </div>
          <table className={styles.programDescription_table}>
            <tbody>
              <tr className={styles.programDescription_tableLine}>
                <td className={styles.programDescription__text}>
                  Тестовый день
                </td>
                <td className={styles.programDescription__text}>510 грн</td>
                <td className={styles.programDescription__text}>357 грн</td>
              </tr>
              <tr className={styles.programDescription_tableLine}>
                <td className={styles.programDescription__text}>1 день</td>
                <td className={styles.programDescription__text}></td>
                <td className={styles.programDescription__text}>510 грн</td>
              </tr>
              <tr className={styles.programDescription_tableLine}>
                <td className={styles.programDescription__text}>от 7 дней</td>
                <td className={styles.programDescription__text}>510 грн</td>
                <td className={styles.programDescription__text}>510 грн</td>
              </tr>
              <tr className={styles.programDescription_tableLine}>
                <td className={styles.programDescription__text}>от 14 дней</td>
                <td className={styles.programDescription__text}>510 грн</td>
                <td className={styles.programDescription__text}>510 грн</td>
              </tr>
              <tr className={styles.programDescription_tableLine}>
                <td className={styles.programDescription__text}>от 30 дней</td>
                <td className={styles.programDescription__text}>510 грн</td>
                <td className={styles.programDescription__text}>510 грн</td>
              </tr>
              <tr className={styles.programDescription_tableLine}>
                <td className={styles.programDescription__text}>
                  Завтрак и ужин
                </td>
                <td className={styles.programDescription__text}>510 грн</td>
                <td className={styles.programDescription__text}>510 грн</td>
              </tr>
            </tbody>
          </table>
          <button type="button" className={styles.programDescription_button}>
            ЗАКАЗАТЬ
          </button>
        </div>
        <div className={styles.programDescription_programmChef}>
          <div className={styles.programDescription_days}>
            <button
              type="button"
              className={`${styles.programDescription_day} ${styles.programDescription_daytype_action}`}
            >
              ПН
            </button>
            <button type="button" className={styles.programDescription_day}>
              ВТ
            </button>
            <button type="button" className={styles.programDescription_day}>
              СР
            </button>
            <button type="button" className={styles.programDescription_day}>
              ЧТ
            </button>
            <button type="button" className={styles.programDescription_day}>
              ПТ
            </button>
            <button type="button" className={styles.programDescription_day}>
              СБ
            </button>
            <button type="button" className={styles.programDescription_day}>
              ВС
            </button>
          </div>
          <div className={styles.programDescription_programmTableContent}>
            <table className={styles.programDescription_programmTable}>
              <tbody>
                <tr>
                  <td>Завтрак</td>
                  <td rowSpan={2}>- Фриттата с сыром и кабачками</td>
                  <td rowSpan={2}>170гр</td>
                </tr>
                <tr>
                  <td>7:00 - 9:00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
