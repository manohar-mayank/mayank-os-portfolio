import { usePortfolio } from "../context/PortfolioContext";
import { headingClass, sectionClass } from "../utils/styles";
import { SectionHeader } from "./SectionHeader";

const questions = ["Who is Mayank?", "Show projects", "Tech stack?"];

export function AssistantsSection() {
  const { setManmaOpen } = usePortfolio();

  return (
    <section id="assistants" className={sectionClass}>
      <SectionHeader
        index="03"
        label="PERSONAL KNOWLEDGE SYSTEM"
        detail="PORTFOLIO AI GUIDE"
      />
      <div className="mt-10 grid gap-10 lg:grid-cols-[.86fr_1.14fr] lg:items-start">
        <h2 className={headingClass}>
          Meet Manma.
          <br />
          <em className="font-serif text-stone-500 ">
            Ask about the work behind the interface.
          </em>
        </h2>
        <div className="border border-stone-300 bg-stone-50 p-6 shadow-sm dark:border-[#373b33] dark:bg-[#181b17] md:p-7">
          <p className="font-mono text-[10px] font-bold tracking-[.09em] text-lime-600 dark:text-[#c7f464]">
            ✦ MANMA / AI GUIDE
          </p>
          <p className="mt-4 max-w-lg text-[17px] leading-8 text-stone-600 dark:text-[#a1a399]">
            I can help you explore Mayank&apos;s work, skills, experience, and
            technical background.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {questions.map((question) => (
              <button
                key={question}
                onClick={() => setManmaOpen(true)}
                className="border border-stone-300 px-3 py-2 text-xs text-stone-600 transition hover:border-lime-500 hover:bg-lime-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-500 dark:border-[#373b33] dark:text-[#a1a399] dark:hover:bg-[#20241e]"
              >
                {question}
              </button>
            ))}
          </div>
          <button
            onClick={() => setManmaOpen(true)}
            className="mt-7 bg-lime-300 px-4 py-3 text-sm font-bold text-[#19210c] transition hover:bg-lime-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-500"
          >
            Open Manma ↗
          </button>
        </div>
      </div>
    </section>
  );
}
