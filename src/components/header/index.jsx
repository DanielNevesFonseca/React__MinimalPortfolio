import styles from "./style.module.css";
import logo from "../../assets/portfolio.png";

export const Header = () => {
  return (
    <header className={styles.header}>
      <img
        className={styles.logo}
        src={logo}
        alt="logo portifolio"
      />
      <ul className={styles.menuPagesContainer}>
        <li>
          <a className={styles.pagesItem} href="#about">
            Sobre
          </a>
        </li>
        <li>
          <a className={styles.pagesItem} href="#stack">
            Stack
          </a>
        </li>
        <li>
          <a className={styles.pagesItem} href="#projects">
            Projetos
          </a>
        </li>
      </ul>
      <a href="#contact" className="button-custom">
        Contato
      </a>
    </header>
  );
};
