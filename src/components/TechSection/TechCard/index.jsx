import styles from "./styles.module.css";

export const TechCard = ({ name, img }) => {
  return (
    <li className={styles.techCard}>
      <img src={img} alt={`Imagem logo ${name}`} />
      <h3 className="title3 bold">{name}</h3>
    </li>
  );
};
