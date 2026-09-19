import { useEffect } from "react";
import Lenis from 'lenis'
import { AboutSection } from "./components/AboutSection";
import { AssistantsSection } from "./components/AssistantsSection";
import { CommandPalette } from "./components/CommandPalette";
import { ContactSection } from "./components/ContactSection";
import { HeroSection } from "./components/HeroSection";
import { ManmaDrawer } from "./components/ManmaDrawer";
import { ProjectModal } from "./components/ProjectModal";
import { ProjectsSection } from "./components/ProjectsSection";
import { SkillsSection } from "./components/SkillsSection";
import { PortfolioProvider, usePortfolio } from "./context/PortfolioContext";
import { useCommandActions } from "./hooks/useCommandActions";
import { RootLayout } from "./layouts/RootLayout";

function PortfolioPage() {
  const {
    dark,
    setPaletteOpen,
    paletteOpen,
    selectedProject,
    setSelectedProject,
    manmaOpen,
    setManmaOpen,
  } = usePortfolio();
  const actions = useCommandActions();
  useEffect(() => {
    const onKeyDown = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setPaletteOpen((isOpen) => !isOpen);
      }
      if (event.key === "Escape") {
        setPaletteOpen(false);
        setSelectedProject(null);
        setManmaOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [setPaletteOpen, setSelectedProject, setManmaOpen]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      direction: 'vertical',
      gestureDirection: 'vertical',
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])
  return (
    <div className={dark ? "dark" : ""}>
      <RootLayout>
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <AssistantsSection />
        <SkillsSection />
        <ContactSection />
      </RootLayout>
      <ManmaDrawer open={manmaOpen} onClose={() => setManmaOpen(false)} />
      {paletteOpen && (
        <CommandPalette
          onClose={() => setPaletteOpen(false)}
          actions={actions}
        />
      )}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          close={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}

export default function App() {
  return (
    <PortfolioProvider>
      <PortfolioPage />
    </PortfolioProvider>
  );
}
