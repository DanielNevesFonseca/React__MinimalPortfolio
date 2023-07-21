import gitHubIcon from "../../assets/github-icon.png";
import whatsIcon from "../../assets/whatsapp-icon.png";
import linkedinIcon from "../../assets/linkedin-icon.png";

import styles from "./style.module.css";

export const Footer = () => {
  return (
    <footer id="contact" className={styles.footer}>
      <h2 className="title2 bold">Contato</h2>
      <div className={styles.iconsContainer}>
        <a target="_blank" href="https://wa.link/eexn7z">
          <img src={whatsIcon} alt="ícone do WhatsApp" />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/daniel-neves-fonseca-471818242/">
          <img src={linkedinIcon} alt="ícone do linkedin" />
        </a>
        <a target="_blank" href="https://github.com/DanielNevesFonseca">
          <img src={gitHubIcon} alt="ícone github" />
        </a>
      </div>
      <p className="text">
        &copy; Todos os Direitos Reservados -{" "}
        <strong>Daniel Neves Fonseca</strong>
      </p>
    </footer>
  );
};
