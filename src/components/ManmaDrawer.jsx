import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { askManma } from "../services/manmaApi";

const suggestions = [
  "Who is Mayank?",
  "Show me his projects",
  "What is his tech stack?",
];
const greeting = {
  role: "assistant",
  content:
    "Hi, I’m Manma. I can help you explore Mayank’s work, skills, experience, and technical background.",
};
export function ManmaDrawer({ open, onClose }) {
  const drawer = useRef(null),
    messagesEnd = useRef(null);
  const [messages, setMessages] = useState([greeting]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!drawer.current) return;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (open)
      gsap.to(drawer.current, {
        x: 0,
        duration: reduce ? 0 : 0.35,
        ease: "power3.out",
      });
    else
      gsap.to(drawer.current, {
        x: "100%",
        duration: reduce ? 0 : 0.25,
        ease: "power2.in",
      });
  }, [open]);
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    if (open) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);
  useEffect(() => {
    messagesEnd.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return undefined;
    const context = gsap.context(() => {
      gsap.fromTo(
        ".manma-message:last-of-type",
        { autoAlpha: 0, y: 8 },
        { autoAlpha: 1, y: 0, duration: 0.22 },
      );
      gsap.fromTo(
        ".manma-suggestion",
        { autoAlpha: 0, y: 6 },
        { autoAlpha: 1, y: 0, duration: 0.2, stagger: 0.06 },
      );
    }, drawer);
    return () => context.revert();
  }, [messages]);
  const send = async (question) => {
    const message = question?.trim();
    if (!message || loading) return;
    const conversation = messages.slice(-8);
    setMessages((current) => [...current, { role: "user", content: message }]);
    setInput("");
    setLoading(true);
    try {
      const result = await askManma(message, conversation);
      setMessages((current) => [...current, {
        role: "assistant",
        content: result.answer,
        sources: result.sources,
        projects: result.projects,
      }]);
    } catch (error) {
      setMessages((current) => [...current, {
        role: "assistant",
        content: error.message || "Manma is unavailable right now.",
      }]);
    } finally {
      setLoading(false);
    }
  };
  return (
    <aside
      ref={drawer}
      aria-hidden={!open}
      className="fixed inset-y-0 right-0 z-50 flex w-full translate-x-full flex-col border-l border-stone-300 bg-[#f5f3eb] shadow-2xl dark:border-[#373b33] dark:bg-[#161914] md:w-[420px]"
    >
      <header className="flex shrink-0 items-start justify-between border-b border-stone-300 p-5 dark:border-[#373b33]">
        <div>
          <p className="font-mono text-xs font-bold tracking-[.08em] text-lime-600 dark:text-[#c7f464]">
            ✦ MANMA
          </p>
          <p className="mt-1 text-xs text-stone-500 dark:text-[#a1a399]">
            Personal AI guide
          </p>
        </div>
        <button
          onClick={onClose}
          aria-label="Close Manma"
          className="text-2xl leading-none"
        >
          ×
        </button>
      </header>
      <div
        data-lenis-prevent
        tabIndex="0"
        aria-label="Manma conversation"
        className="min-h-0 flex-1 overflow-y-auto overscroll-contain p-5"
      >
        <div className="space-y-3">
          {messages.map((message, index) => (
            <article
              key={`${message.role}-${index}`}
              className={`manma-message max-w-[90%] text-sm leading-6 ${message.role === "user" ? "ml-auto bg-lime-300 p-3 text-[#19210c]" : "border border-stone-300 p-3 dark:border-[#373b33]"}`}
            >
              <p>{message.content}</p>
              {message.projects?.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-1">
                  {message.projects.map((project) => (
                    <span
                      key={project}
                      className="border border-current px-2 py-1 font-mono text-[9px]"
                    >
                      {project}
                    </span>
                  ))}
                </div>
              )}
              {message.sources?.length > 0 && (
                <p className="mt-2 font-mono text-[9px] text-stone-500 dark:text-[#a1a399]">
                  Sources · {message.sources.length}
                </p>
              )}
            </article>
          ))}
          {loading && (
            <p className="font-mono text-xs text-stone-500 dark:text-[#a1a399]">
              Manma is thinking…
            </p>
          )}
          <div ref={messagesEnd} />
        </div>
        {messages.length === 1 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {suggestions.map((suggestion) => (
              <button
                key={suggestion}
                onClick={() => send(suggestion)}
                className="manma-suggestion border border-stone-300 px-3 py-2 text-left text-xs hover:border-lime-500 dark:border-[#373b33]"
              >
                {suggestion}
              </button>
            ))}
          </div>
        )}
      </div>
      <form
        className="flex shrink-0 border-t border-stone-300 p-4 dark:border-[#373b33]"
        onSubmit={(event) => {
          event.preventDefault();
          send(input);
        }}
      >
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          maxLength="800"
          placeholder="Ask Manma…"
          className="min-h-10 min-w-0 flex-1 bg-transparent px-2 text-sm outline-none"
        />
        <button
          disabled={loading}
          className="px-3 font-bold text-lime-600 disabled:opacity-50 dark:text-[#c7f464]"
        >
          ↗
        </button>
      </form>
    </aside>
  );
}
