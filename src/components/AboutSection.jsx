import { ProfilePhoto } from "./ProfilePhoto";
import { SectionHeader } from "./SectionHeader";
import { personal } from "../data/profile";
import { sectionClass, headingClass } from "../utils/styles";

export function AboutSection() {
  return (
    <section id="about" className={sectionClass}>
      <SectionHeader index="02" label="PROFILE" detail="BASED IN INDIA" />
      <div className="mt-10 grid gap-10 lg:grid-cols-[.86fr_1.14fr]">
        <h2 className={headingClass}>
          A builder with
          <br />a systems <em className="font-serif">mindset.</em>
        </h2>
        <div className="grid gap-8 md:grid-cols-[1fr_.78fr]">
          <div className="text-[17px] leading-8 text-stone-600 dark:text-[#a1a399]">
            <p className="text-current">
              I&apos;m {personal.name}, a {personal.role} building toward work
              where reliable software engineering meets useful AI. I enjoy
              taking an idea from interface to API, data model, and deployment.
            </p>
            <p className="mt-5">
              Right now, I&apos;m deepening my full-stack foundations while
              exploring LLM APIs and practical AI experiments, one useful build
              at a time.
            </p>
          </div>
          <ProfilePhoto />
        </div>
      </div>
    </section>
  );
}
