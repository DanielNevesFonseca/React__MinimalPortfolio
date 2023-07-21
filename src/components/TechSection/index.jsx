import { technologies } from "../../data/technologies";
import styles from "./styles.module.css";
import { TechCard } from "./TechCard";

export const TechSection = ({ technologiesList }) => {
  return (
    <section id="stack" className={styles.techSection}>
      <h2 className="title2 bold">Tecnologias</h2>
      <ul className={styles.techCardsContainer}>
        {technologies.map((tech) => {
          return <TechCard name={tech.name} img={tech.img} key={tech.id} />;
        })}
        ;
      </ul>
    </section>
  );
};
