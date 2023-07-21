import { Header } from "./components/header";
import { Footer } from "./components/Footer";
import { BannerSection } from "./components/BannerSection";
import { AboutMeSection } from "./components/AboutMeSection";
import { TechSection } from "./components/TechSection";
import { ProjectSection } from "./components/ProjectSection";

import "./styles/index.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <BannerSection />
      <AboutMeSection />
      <TechSection />
      <ProjectSection />
      <Footer />
      <a id="top" className="button-custom" href="#">
        Voltar ao topo
      </a>
    </div>
  );
}

export default App;
