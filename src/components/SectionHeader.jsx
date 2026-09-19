export function SectionHeader({ index, label, detail }) {
  return (
    <div className="flex justify-between border-b border-stone-300 pb-4 font-mono text-[10px] text-stone-500 dark:border-[#373b33] dark:text-[#a1a399]">
      <span className="text-lime-600 dark:text-[#c7f464]">
        {index} / {label}
      </span>
      <span>{detail}</span>
    </div>
  );
}
