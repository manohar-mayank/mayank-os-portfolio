export function Footer() {
  return (
    <footer className="flex justify-between gap-3 bg-[#19210c] px-[4vw] py-4 font-mono text-[9px] tracking-[.04em] text-[#aab397]">
      <span>© {new Date().getFullYear()} MAYANK MANOHAR</span>
      <span className="hidden sm:block">DESIGNED AS A LIVING PORTFOLIO</span>
      <span className="text-lime-300">● SYSTEM ONLINE</span>
    </footer>
  );
}
