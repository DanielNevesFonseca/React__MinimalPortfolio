import styles from "./styles.module.css";
import { projects } from "../../../data/projects.js";
import { ProjectCard } from "./ProjectCard";

export const ProjectsList = () => {
  return (
    <ul className={styles.projectListContainer}>
      {projects.map((project) => {
        return (
          <ProjectCard
            name={project.name}
            description={project.description}
            url={project.url}
            key={project.id}
          />
        );
      })}
    </ul>
  );
};
