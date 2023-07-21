import styles from "./styles.module.css";
import { ProjectsList } from "./ProjectsList";

export const ProjectSection = () => {
  return (
    <section id="projects" className={styles.projectSection}>
      <h2 className="title2 bold">Projetos</h2>
      <ProjectsList />
    </section>
  );
};
