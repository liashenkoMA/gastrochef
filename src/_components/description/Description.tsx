import Image from "next/image";

import styles from "./page.module.css";

import eco from "@/_images/eco.png";
import eda from "@/_images/eda.png";
import time from "@/_images/time.png";
import night from "@/_images/night.png";
import car from "@/_images/car.png";
import clock from "@/_images/clock.png";

export default function Description() {
  return (
    <section className={styles.description}>
      <div className={styles.lists}>
        <div className={styles.list}>
          <Image
            src={eco}
            width={51}
            height={64}
            alt="Эко еда"
            className={styles.image}
          />
          <p className={styles.text}>Бережём природу.</p>
          <p className={styles.text}>Эко-тара и проборы.</p>
        </div>
        <div className={styles.list}>
          <Image
            src={eda}
            width={66}
            height={66}
            alt="Эко еда"
            className={styles.image}
          />
          <p className={styles.text}>28 дней без повторения, более 300 блюд!</p>
        </div>
        <div className={styles.list}>
          <Image
            src={time}
            width={68}
            height={68}
            alt="Эко еда"
            className={styles.image}
          />
          <p className={styles.text}>Бесплатно заменяем блюда и ингредиенты.</p>
        </div>
        <div className={styles.list}>
          <Image
            src={night}
            width={62}
            height={62}
            alt="Эко еда"
            className={styles.image}
          />
          <p className={styles.text}>
            Готовим ночью, упаковываем и отправляем Вам!
          </p>
        </div>
        <div className={styles.list}>
          <Image
            src={car}
            width={100}
            height={69}
            alt="Эко еда"
            className={styles.image}
          />
          <p className={styles.text}>
            Ежедневная удобная и бесплатная доставка с 6:00 до 10:00
          </p>
        </div>
        <div className={styles.list}>
          <Image
            src={clock}
            width={68}
            height={68}
            alt="Эко еда"
            className={styles.image}
          />
          <p className={styles.text}>
            Сохраняем Вашу энергию и до 14 часов в неделю освобождая от готовки!
          </p>
        </div>
      </div>
    </section>
  );
}
