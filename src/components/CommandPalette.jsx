import { useEffect, useMemo, useRef, useState } from "react";
export function CommandPalette({ onClose, actions }) {
  const [query, setQuery] = useState(""),
    [active, setActive] = useState(0);
  const input = useRef(null);
  const dialog = useRef(null);
  const itemRefs = useRef([]);
  const items = useMemo(
    () =>
      actions.filter((item) =>
        `${item.label} ${item.hint}`
          .toLowerCase()
          .includes(query.toLowerCase()),
      ),
    [actions, query],
  );
  useEffect(() => {
    input.current?.focus();
    setActive(0);
  }, [query]);
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    input.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);
  useEffect(() => {
    itemRefs.current[active]?.scrollIntoView({ block: "nearest" });
  }, [active, items.length]);
  const execute = (item) => {
    item.run();
    onClose();
  };
  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-5 backdrop-blur-sm"
      role="presentation"
      onMouseDown={onClose}
    >
      <div
        ref={dialog}
        className="w-full max-w-xl overflow-hidden border border-stone-300 bg-stone-50 text-[#161813] shadow-2xl dark:border-[#373b33] dark:bg-[#181b17] dark:text-[#eeeade]"
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
        onMouseDown={(event) => event.stopPropagation()}
        onKeyDown={(event) => {
          if (event.key !== "Tab") return;
          const focusable = dialog.current?.querySelectorAll(
            'button, input, [href], [tabindex]:not([tabindex="-1"])',
          );
          if (!focusable?.length) return;
          const first = focusable[0];
          const last = focusable[focusable.length - 1];
          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last.focus();
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
          }
        }}
      >
        <input
          ref={input}
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search actions…"
          aria-label="Search commands"
          className="w-full border-b border-stone-300 bg-transparent p-5 text-sm outline-none dark:border-[#373b33]"
          onKeyDown={(event) => {
            if (event.key === "ArrowDown") {
              event.preventDefault();
              setActive((value) => Math.min(value + 1, items.length - 1));
            }
            if (event.key === "ArrowUp") {
              event.preventDefault();
              setActive((value) => Math.max(value - 1, 0));
            }
            if (event.key === "Enter" && items[active]) execute(items[active]);
          }}
        />
        <div data-lenis-prevent tabIndex="0" aria-label="Command list" className="max-h-80 overflow-y-auto overscroll-contain">
          {items.length ? (
            items.map((item, index) => (
              <button
                key={item.id}
                ref={(element) => {
                  itemRefs.current[index] = element;
                }}
                className={`flex w-full justify-between gap-5 border-b border-stone-200 px-5 py-4 text-left text-sm dark:border-[#292d27] ${index === active ? "bg-lime-100 dark:bg-[#2d3a19]" : ""}`}
                onMouseEnter={() => setActive(index)}
                onClick={() => execute(item)}
              >
                <span>{item.label}</span>
                <small className="text-stone-500 dark:text-[#a1a399]">
                  {item.hint}
                </small>
              </button>
            ))
          ) : (
            <p className="p-5 text-sm text-stone-500">No matching actions.</p>
          )}
        </div>
        <footer className="flex justify-between p-3 font-mono text-[9px] text-stone-500 dark:text-[#a1a399]">
          <span>↑↓ Navigate</span>
          <span>↵ Select</span>
          <span>Esc Close</span>
        </footer>
      </div>
    </div>
  );
}
