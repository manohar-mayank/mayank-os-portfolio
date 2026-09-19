import { personal } from "../data/profile";
import { useScrollTo } from "../hooks/useScrollTo";
import { usePortfolio } from "../context/PortfolioContext";

export function HomeSection() {
  const scrollTo = useScrollTo();
  const { setManmaOpen } = usePortfolio();
  return (
    <section
      id="home"
      className="mx-auto grid min-h-[calc(100vh-64px)] w-[91vw] max-w-6xl items-center gap-12 py-16 lg:grid-cols-[1.04fr_.96fr]"
    >
      <div>
        <p className="font-mono text-[10px] tracking-[.09em] text-lime-600 dark:text-[#c7f464]">
          <span className="mr-2 inline-block h-2 w-2 rounded-full bg-lime-500" />
          MAYANK MANOHAR · FULL STACK DEVELOPER
        </p>
        <h1 className="mt-6 text-[clamp(3.25rem,6.4vw,5.8rem)] font-bold leading-[.92] tracking-[-.08em]">
          Full-stack systems.
          <br />
          <em className="font-serif font-semibold">Useful</em> interfaces.
        </h1>
        <p className="mt-6 max-w-xl text-[17px] leading-7 text-stone-600 dark:text-[#a1a399]">
          {personal.bio}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-6">
          <button
            onClick={() => scrollTo("projects")}
            className="bg-lime-300 px-5 py-3 text-sm font-bold text-[#19210c] hover:bg-lime-400"
          >
            Explore selected work ↘
          </button>
          <button
            className="border-b border-current pb-1 text-sm font-bold transition hover:text-lime-600 dark:hover:text-[#c7f464] motion-reduce:transition-none"
            onClick={() => setManmaOpen(true)}
          >
            Ask Manma ↗
          </button>
        </div>
        <div className="mt-14 flex justify-between border-t border-stone-300 pt-3 font-mono text-[10px] text-stone-500 dark:border-[#373b33] dark:text-[#a1a399]">
          <span className="text-lime-600 dark:text-[#c7f464]">01—04</span>
          <span>MERN / BACKEND / APPLIED AI</span>
        </div>
      </div>
      <div className="relative min-h-[380px] overflow-hidden border border-stone-300 bg-stone-100 dark:border-[#373b33] dark:bg-[#181b17] md:min-h-[530px]">
        <div className="absolute inset-0 grid grid-cols-3 grid-rows-3">
          {Array.from({ length: 9 }).map((_, i) => (
            <span
              key={i}
              className="border-b border-r border-stone-300/60 dark:border-[#373b33]"
            />
          ))}
        </div>
        <span className="absolute left-4 top-4 font-mono text-[10px] text-stone-500 dark:text-[#a1a399]">
          LIVE BUILD ENVIRONMENT
        </span>
        <div className="absolute left-1/2 top-1/2 h-44 w-[24rem] -translate-x-1/2 -translate-y-1/2 rotate-[-23deg] rounded-[50%] border border-lime-400/70" />
        <div className="absolute left-1/2 top-1/2 h-[25rem] w-52 -translate-x-1/2 -translate-y-1/2 rotate-[28deg] rounded-[50%] border border-lime-400/70" />
        <div className="absolute left-1/2 top-1/2 grid h-32 w-32 -translate-x-1/2 -translate-y-1/2 place-content-center rounded-full bg-lime-300 text-center text-[#19210c]">
          <b className="text-4xl tracking-[-.1em]">MM</b>
          <small className="mt-1 font-mono text-[8px]">
            BUILD / SHIP / LEARN
          </small>
        </div>
        <div className="absolute bottom-4 left-4 font-mono text-[10px] text-stone-500 dark:text-[#a1a399]">
          <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-lime-400" />
          System focus{" "}
          <b className="ml-2 text-lime-600 dark:text-[#c7f464]">BUILDING</b>
        </div>
      </div>
    </section>
  );
}
