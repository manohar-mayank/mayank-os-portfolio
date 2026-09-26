import { usePortfolio } from "../context/PortfolioContext";

export function ProjectModal({ project, close }) {
  const { setManmaOpen } = usePortfolio();
  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-5 backdrop-blur-sm"
      role="presentation"
      onMouseDown={close}
    >
      <div
        className="relative w-full max-w-xl border border-stone-300 bg-stone-50 p-7 shadow-2xl dark:border-[#373b33] dark:bg-[#181b17]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          className="absolute right-4 top-2 text-3xl dark:text-[#eeeade] cursor-pointer"
          onClick={close}
          aria-label="Close case study"
        >
          ×
        </button>
        <span className="font-mono text-[10px] text-lime-600 dark:text-[#c7f464]">
          {project.categories.join(" / ")} · {project.year}
        </span>
        <h2
          id="project-title"
          className="mt-3 pr-8 text-3xl font-bold tracking-[-.06em] dark:text-[#eeeade]"
        >
          {project.title}
        </h2>
        <p className="mt-3 text-sm leading-7 text-stone-600 dark:text-[#a1a399]">
          {project.description}
        </p>
        {(project.liveUrl || project.githubUrl) && (
          <div className="mt-4 flex flex-wrap gap-5 font-mono text-[10px] font-bold text-lime-700 dark:text-[#c7f464]">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer">
                LIVE PROJECT ↗
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noreferrer">
                SOURCE CODE ↗
              </a>
            )}
          </div>
        )}
        <h3 className="mt-6 font-mono text-[10px] text-lime-600 dark:text-[#c7f464]">
          HIGHLIGHTS
        </h3>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-stone-600 dark:text-[#a1a399]">
          {project.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <h3 className="mt-6 font-mono text-[10px] text-lime-600 dark:text-[#c7f464]">
          STACK
        </h3>
        <div className="mt-2 flex flex-wrap gap-2">
          {project.technologies.map((item) => (
            <span
              key={item}
              className="border border-stone-300 px-2 py-1 font-mono text-[9px] text-stone-500 dark:border-[#373b33] dark:text-[#a1a399]"
            >
              {item}
            </span>
          ))}
        </div>
        <button
          onClick={() => {
            close();
            setManmaOpen(true);
          }}
          className="mt-6 bg-lime-300 px-3 py-2 text-xs font-bold text-[#19210c]"
        >
          Ask Manma about this project ↗
        </button>
      </div>
    </div>
  );
}
