import styles from "./styles.module.css";

export const AboutMeSection = () => {
  return (
    <section id="about" className={styles.aboutMeSection}>
      <h2 className="title2 bold">Sobre mim</h2>
      <p className="text">
        Eu decidi fazer minha transição de carreira em Março de 2023, migrando
        do Setor comercial em vendas para o Setor de Tecnologia, em especial na
        área de desenvolvimento web.
      </p>
      <p className="text">
        Atualmente estou estudando Desenvolvimento Web Fullstack na Kenzie
        Academy Brasil e estou cursando EAD de Análise e Desenvolvimento de
        Sistemas pela Uninter.
      </p>
    </section>
  );
};
