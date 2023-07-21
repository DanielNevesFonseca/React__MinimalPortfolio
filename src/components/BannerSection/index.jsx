import styles from "./styles.module.css";
import imageComputer from "../../assets/banner-img.png";

export const BannerSection = () => {
  return (
    <section className={styles.bannerSection}>
      <div className={styles.textContainer}>
        <span className="label">@DanielNevesFonseca</span>
        <h1 className="title1 bold">Seja bem vindo ao meu portifólio!</h1>
        <p className={`text`}>
          Acredito que tudos os objetivos e sonhos podem ser alcançado por
          aqueles que tem determinação e não desistem!
        </p>
        <button className="button-custom">Saiba Mais</button>
      </div>
      <img
        className={styles.bannerImage}
        src={imageComputer}
        alt="imagem banner de um computador"
      />
    </section>
  );
};
