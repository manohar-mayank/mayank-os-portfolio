import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { projects, projectFilters } from "../data/projects";
import { skills, skillCategories } from "../data/skills";

const PortfolioContext = createContext(null);
const filters = projectFilters.filter(
  (filter) =>
    filter === "All" ||
    projects.some((project) => project.categories.includes(filter)),
);

export function PortfolioProvider({ children }) {
  const [dark, setDark] = useState(true);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [manmaOpen, setManmaOpen] = useState(false);
  const [projectFilter, setProjectFilter] = useState("All");
  const [activeProjectId, setActiveProjectId] = useState(
    projects.find((project) => project.featured)?.id ?? projects[0]?.id,
  );
  const [selectedProject, setSelectedProject] = useState(null);
  const [skillCategory, setSkillCategory] = useState("All");
  const visibleProjects = useMemo(
    () =>
      projectFilter === "All"
        ? projects
        : projects.filter((project) =>
            project.categories.includes(projectFilter),
          ),
    [projectFilter],
  );
  const activeProject =
    visibleProjects.find((project) => project.id === activeProjectId) ??
    visibleProjects[0];
  const visibleSkills = useMemo(
    () =>
      skillCategory === "All"
        ? skills.filter((skill) => skill.featured)
        : skills.filter((skill) => skill.category === skillCategory),
    [skillCategory],
  );
  useEffect(() => {
    if (
      visibleProjects.length &&
      !visibleProjects.some((project) => project.id === activeProjectId)
    )
      setActiveProjectId(visibleProjects[0].id);
  }, [visibleProjects, activeProjectId]);
  const value = {
    dark,
    setDark,
    paletteOpen,
    setPaletteOpen,
    manmaOpen,
    setManmaOpen,
    filters,
    projectFilter,
    setProjectFilter,
    visibleProjects,
    activeProject,
    setActiveProjectId,
    selectedProject,
    setSelectedProject,
    skillCategories,
    skillCategory,
    setSkillCategory,
    visibleSkills,
  };
  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (!context)
    throw new Error("usePortfolio must be used inside PortfolioProvider");
  return context;
}
