import { usePortfolio } from "../context/PortfolioContext";
import { useScrollTo } from "../hooks/useScrollTo";

const navigation = [
  ["projects", "Work"],
  ["about", "About"],
  ["skills", "Skills"],
  ["contact", "Contact"],
];
export function Header() {
  const { dark, setDark, setPaletteOpen, setManmaOpen } = usePortfolio();
  const scrollTo = useScrollTo();
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-stone-300 bg-[#f0eee6]/90 px-[4vw] backdrop-blur dark:border-[#292d27] dark:bg-[#121411]/90">
      <button
        onClick={() => scrollTo("home")}
        className="font-mono text-[13px] font-bold tracking-[.08em]"
      >
        <i className="mr-2 inline-block h-2 w-2 rounded-full bg-lime-500" />
        MAYANK<span className="font-normal text-stone-500">.OS</span>
      </button>
      <nav className="hidden gap-7 md:flex">
        {navigation.map(([id, name]) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className="text-sm text-stone-500 hover:text-current dark:text-[#a1a399]"
          >
            {name}
          </button>
        ))}
      </nav>
      <div className="flex gap-3">
        <button
          onClick={() => setManmaOpen(true)}
          className="cursor-pointer border bg-lime-300 px-2 py-1 font-mono text-xs text-[#19210c] hover:bg-lime-400 dark:border-[#373b33]"
        >
          ✦ Manma
        </button>
        <button
          onClick={() => setPaletteOpen(true)}
          className="border border-stone-300 px-2 py-1 font-mono text-xs dark:border-[#373b33]"
        >
          Ctrl K
        </button>
        <button
          onClick={() => setDark((value) => !value)}
          className="text-xs text-stone-500 dark:text-[#a1a399]"
        >
          {dark ? "Light" : "Dark"}
        </button>
      </div>
    </header>
  );
}
