import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { skills } from "../data/skills";

export function SkillsMarquee() {
  const track = useRef(null);
  const items = [...skills, ...skills];
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return undefined;
    const animation = gsap.to(track.current, {
      xPercent: -50,
      duration: 28,
      ease: "none",
      repeat: -1,
    });
    return () => animation.kill();
  }, []);
  return (
    <div className="mb-8 overflow-hidden border-y border-stone-300 py-3 dark:border-[#373b33]">
      <div ref={track} className="flex w-max gap-3">
        {items.map((skill, index) => (
          <span
            key={`${skill.name}-${index}`}
            className="flex items-center gap-2 border border-stone-300 bg-stone-50 px-3 py-2 font-mono text-[10px] dark:border-[#373b33] dark:bg-[#181b17]"
          >
            <b className=" text-lime-600 dark:text-[#c7f464]">{skill.icon}</b>
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
}
