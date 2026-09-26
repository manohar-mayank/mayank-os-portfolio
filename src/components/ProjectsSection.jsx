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
  const drag = useRef(null);
  const suppressClick = useRef(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const element = rail.current;
    if (!element) return undefined;

    tween.current?.kill();
    tween.current = null;
    element.scrollLeft = 0;
    element.style.scrollSnapType = "";
    element.setAttribute("data-lenis-prevent", "");

    const finePointer = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    ).matches;
    if (projectFilter !== "All") {
      if (finePointer) element.style.scrollSnapType = "none";
      return undefined;
    }
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !finePointer
    ) {
      return undefined;
    }

    element.style.scrollSnapType = "none";
    const maxScroll = element.scrollWidth - element.clientWidth;
    if (maxScroll <= 0) return undefined;

    tween.current = gsap.to(element, {
      scrollLeft: maxScroll,
      duration: Math.max(16, maxScroll / 28),
      ease: "none",
      repeat: -1,
      yoyo: true,
    });

    return () => {
      tween.current?.kill();
      tween.current = null;
    };
  }, [projectFilter, visibleProjects]);

  useEffect(() => {
    if (paused) tween.current?.pause();
    else tween.current?.resume();
  }, [paused]);

  const endDrag = (event) => {
    if (!drag.current || drag.current.pointerId !== event.pointerId) return;
    const currentDrag = drag.current;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    event.currentTarget.style.scrollSnapType = currentDrag.scrollSnapType;
    drag.current = null;
    if (suppressClick.current) {
      window.setTimeout(() => {
        suppressClick.current = false;
      }, 0);
    }
  };

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
          A curated selection of useful products and practical systems.
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
        onPointerDown={(event) => {
          if (
            event.pointerType !== "mouse" ||
            event.button !== 0 ||
            event.target.closest("button, a")
          ) {
            return;
          }
          drag.current = {
            pointerId: event.pointerId,
            startX: event.clientX,
            scrollLeft: event.currentTarget.scrollLeft,
            scrollSnapType: event.currentTarget.style.scrollSnapType,
          };
          suppressClick.current = false;
          setPaused(true);
          event.currentTarget.style.scrollSnapType = "none";
          event.currentTarget.setPointerCapture(event.pointerId);
        }}
        onPointerMove={(event) => {
          if (!drag.current || drag.current.pointerId !== event.pointerId) {
            return;
          }
          const distance = event.clientX - drag.current.startX;
          if (Math.abs(distance) > 4) suppressClick.current = true;
          if (suppressClick.current) {
            event.currentTarget.scrollLeft = drag.current.scrollLeft - distance;
          }
        }}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onClickCapture={(event) => {
          if (suppressClick.current) {
            event.preventDefault();
            event.stopPropagation();
            suppressClick.current = false;
          }
        }}
        className="flex cursor-grab snap-x snap-mandatory gap-4 overflow-x-auto pb-4 active:cursor-grabbing [scrollbar-width:none]"
      >
        {visibleProjects.map((project, index) => {
          const featuredBorder =
            project.id === "manma"
              ? "border-lime-600/60 dark:border-[#647a34]"
              : project.id === "emotion-detection"
                ? "border-lime-500/40 dark:border-[#52652e]"
                : "border-stone-300 dark:border-[#373b33]";

          return (
            <article
              key={project.id}
              className={`group w-[min(74vw,320px)] shrink-0 snap-start border bg-stone-50 p-4 transition-transform duration-200 hover:-translate-y-1 dark:bg-[#181b17] motion-reduce:transition-none ${featuredBorder}`}
            >
              <div className="relative h-36 overflow-hidden border border-stone-300 bg-stone-200 font-mono text-[10px] text-stone-700 dark:border-[#373b33] dark:bg-[#20241e] dark:text-[#d0d1c9]">
                {project.image && (
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="absolute inset-0 h-full w-full object-cover opacity-35 transition-opacity duration-200 group-hover:opacity-45 motion-reduce:transition-none"
                  />
                )}
                <div className="relative h-36 p-4">
                  <span>
                    PROJECT / {String(index + 1).padStart(2, "0")}
                  </span>
                  <b className="absolute left-4 top-1/2 text-xl tracking-[.12em]">
                    {project.id.toUpperCase()}
                  </b>
                  <small className="absolute bottom-4 left-4 text-lime-700 dark:text-[#c7f464]">
                    {project.technologies.slice(0, 3).join(" / ")}
                  </small>
                </div>
              </div>
              <p className="mt-4 font-mono text-[10px] text-lime-600 dark:text-[#c7f464]">
                {project.categories.join(" / ")} · {project.year}
              </p>
              <h3 className="mt-2 text-xl font-bold tracking-[-.055em]">
                {project.title}
              </h3>
              <p className="mt-2 text-[13px] leading-5 text-stone-700 dark:text-[#a1a399]">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="border border-stone-300 px-2 py-1 font-mono text-[9px] text-stone-600 dark:border-[#373b33] dark:text-[#a1a399]"
                  >
                    {technology}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-lime-300 px-3 py-2 text-xs font-bold text-[#19210c] transition hover:bg-lime-400"
                  >
                    Live demo ↗
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-b border-current pb-1 text-xs font-bold transition hover:text-lime-700 dark:hover:text-[#c7f464]"
                  >
                    GitHub ↗
                  </a>
                )}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="border-b border-stone-400 pb-1 text-xs text-stone-600 transition hover:text-current dark:border-[#62665c] dark:text-[#b8baaf]"
                >
                  Details
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
