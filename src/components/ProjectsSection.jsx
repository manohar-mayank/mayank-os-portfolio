import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { usePortfolio } from "../context/PortfolioContext";
import { headingClass, sectionClass } from "../utils/styles";
import { SectionHeader } from "./SectionHeader";

export function ProjectsSection() {
  const {
    filters,
    projectFilter,
    setProjectFilter,
    visibleProjects,
    setSelectedProject,
  } = usePortfolio();
  const rail = useRef(null);
  const tween = useRef(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const element = rail.current;
    if (!element) return undefined;

    element.setAttribute("data-lenis-prevent", "");
    element.style.scrollSnapType = "none";

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const cycleWidth = element.scrollWidth / 2;
    if (cycleWidth <= element.clientWidth) return undefined;

    tween.current = gsap.to(element, {
      scrollLeft: cycleWidth,
      duration: Math.max(16, cycleWidth / 24),
      ease: "none",
      repeat: -1,
    });

    return () => {
      tween.current?.kill();
      tween.current = null;
    };
  }, [visibleProjects]);

  useEffect(() => {
    if (paused) tween.current?.pause();
    else tween.current?.resume();
  }, [paused]);

  const loopingProjects = [...visibleProjects, ...visibleProjects];

  return (
    <section id="projects" className={sectionClass}>
      <SectionHeader
        index="01"
        label="SELECTED WORK"
        detail={`${visibleProjects.length} PROJECTS INDEXED`}
      />
      <div className="my-10 grid gap-6 md:grid-cols-2 md:items-end">
        <h2 className={headingClass}>
          Projects with
          <br />
          <em className="font-serif">intent.</em>
        </h2>
        <p className="max-w-sm text-sm leading-6 text-stone-700 dark:text-[#a1a399]">
          A curated, moving gallery of useful products and practical systems.
        </p>
      </div>
      <div className="mb-6 flex flex-wrap gap-2">
        {filters.map((item) => (
          <button
            key={item}
            onClick={() => setProjectFilter(item)}
            className={`border px-3 py-2 font-mono text-[10px] ${projectFilter === item ? "border-lime-300 bg-lime-300 text-[#19210c]" : "border-stone-300 text-stone-700 dark:border-[#373b33] dark:text-[#a1a399]"}`}
          >
            {item}
          </button>
        ))}
      </div>
      <div
        ref={rail}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:none]"
      >
        {loopingProjects.map((project, index) => {
          const duplicate = index >= visibleProjects.length;
          const projectIndex = index % visibleProjects.length;

          return (
            <article
              key={`${project.id}-${index}`}
              aria-hidden={duplicate}
              className="min-w-[82vw] snap-start border border-stone-300 bg-stone-50 p-6 dark:border-[#373b33] dark:bg-[#181b17] sm:min-w-[440px]"
            >
              <div className="relative min-h-44 overflow-hidden border border-stone-300 bg-stone-200 p-4 font-mono text-[10px] text-stone-600 dark:border-[#373b33] dark:bg-[#20241e] dark:text-[#a1a399]">
                <span>PROJECT / {String(projectIndex + 1).padStart(2, "0")}</span>
                <b className="absolute left-4 top-1/2 text-xl tracking-[.12em]">
                  {project.id.toUpperCase()}
                </b>
                <small className="absolute bottom-4 left-4 text-lime-600 dark:text-[#c7f464]">
                  {project.technologies.slice(0, 3).join(" / ")}
                </small>
              </div>
              <p className="mt-5 font-mono text-[10px] text-lime-600 dark:text-[#c7f464]">
                {project.categories.join(" / ")} · {project.year}
              </p>
              <h3 className="mt-3 text-2xl font-bold tracking-[-.055em]">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-stone-700 dark:text-[#a1a399]">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="border border-stone-300 px-2 py-1 font-mono text-[9px] text-stone-600 dark:border-[#373b33] dark:text-[#a1a399]"
                  >
                    {technology}
                  </span>
                ))}
              </div>
              <button
                tabIndex={duplicate ? -1 : undefined}
                onClick={() => setSelectedProject(project)}
                className="mt-7 border-b border-current pb-1 text-sm font-bold hover:text-lime-600 dark:hover:text-[#c7f464]"
              >
                Open case study ↗
              </button>
            </article>
          );
        })}
      </div>
      <p className="mt-2 font-mono text-[9px] text-stone-500 dark:text-[#a1a399]">
        DRAG OR SWIPE TO EXPLORE · PAUSES ON HOVER
      </p>
    </section>
  );
}
