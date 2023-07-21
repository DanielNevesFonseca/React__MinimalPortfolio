import gitIcon from "../../../../assets/git-icon.png";
import styles from "./styles.module.css";

export const ProjectCard = ({ name, description, url }) => {
  return (
    <li className={styles.projectCard}>
      <h3 className="title3 bold">{name}</h3>
      <p className="text">{description}</p>
      <a className="link" target="_blank" href={url}>
        Link do Projeto
      </a>
      <img className={styles.gitIcon} src={gitIcon} alt="ícone do git" />
    </li>
  );
};
