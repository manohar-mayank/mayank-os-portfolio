import AwsOriginalIcon from "@devicon/react/amazonwebservices/original-wordmark";
import Css3OriginalIcon from "@devicon/react/css3/original";
import DockerOriginalIcon from "@devicon/react/docker/original";
import ExpressOriginalIcon from "@devicon/react/express/original";
import GitOriginalIcon from "@devicon/react/git/original";
import Html5OriginalIcon from "@devicon/react/html5/original";
import JavascriptOriginalIcon from "@devicon/react/javascript/original";
import MongodbOriginalIcon from "@devicon/react/mongodb/original";
import MysqlOriginalIcon from "@devicon/react/mysql/original";
import NodejsOriginalIcon from "@devicon/react/nodejs/original";
import PythonOriginalIcon from "@devicon/react/python/original";
import ReactOriginalIcon from "@devicon/react/react/original";
import TailwindcssOriginalIcon from "@devicon/react/tailwindcss/original";
import TensorflowOriginalIcon from "@devicon/react/tensorflow/original";
import { usePortfolio } from "../context/PortfolioContext";
import { headingClass, sectionClass } from "../utils/styles";
import { SectionHeader } from "./SectionHeader";
const icons = {
  react: ReactOriginalIcon,
  javascript: JavascriptOriginalIcon,
  html: Html5OriginalIcon,
  css: Css3OriginalIcon,
  tailwind: TailwindcssOriginalIcon,
  node: NodejsOriginalIcon,
  express: ExpressOriginalIcon,
  mongodb: MongodbOriginalIcon,
  mysql: MysqlOriginalIcon,
  git: GitOriginalIcon,
  docker: DockerOriginalIcon,
  aws: AwsOriginalIcon,
  python: PythonOriginalIcon,
  tensorflow: TensorflowOriginalIcon,
};
function SkillIcon({ skill }) {
  const Icon = icons[skill.icon];
  return (
    <div className="group flex min-w-0 flex-col items-center gap-3 text-center" aria-label={skill.name}>
      <div className="grid aspect-square w-full max-w-19 place-items-center rounded-2xl border border-stone-200 bg-white text-4xl shadow-sm transition duration-200 group-hover:-translate-y-1 group-hover:shadow-md dark:border-[#373b33] dark:bg-[#181b17] motion-reduce:transition-none">
        {Icon ? (
          <Icon aria-hidden="true" size="1.7em" />
        ) : (
          <span className="font-mono text-[10px] text-lime-600 dark:text-[#c7f464]">
            {skill.name.slice(0, 3).toUpperCase()}
          </span>
        )}
      </div>
      <span className="text-xs font-semibold leading-4 text-stone-900 dark:text-[#eeeade]">
        {skill.name}
      </span>
    </div>
  );
}
export function SkillsSection() {
  const { skillCategories, skillCategory, setSkillCategory, visibleSkills } =
    usePortfolio();
  return (
    <section id="skills" className={sectionClass}>
      <SectionHeader
        index="04"
        label="TOOLSET"
        detail="SELECTED TECHNOLOGIES"
      />
      <div className="my-10 grid gap-6 md:grid-cols-2 md:items-end">
        <h2 className={headingClass}>
          Tools for the
          <br />
          <em className="font-serif">whole build.</em>
        </h2>
        <p className="max-w-sm text-sm leading-6 text-stone-700 dark:text-[#a1a399]">
          A focused technology wall spanning interfaces, backend systems, cloud,
          and applied AI.
        </p>
      </div>
      <div className="mb-5 flex flex-wrap gap-2">
        {["All", ...skillCategories].map((category) => (
          <button
            key={category}
            onClick={() => setSkillCategory(category)}
            className={`border px-3 py-2 font-mono text-[10px] ${skillCategory === category ? "border-lime-300 bg-lime-300 text-[#19210c]" : "border-stone-300 text-stone-700 dark:border-[#373b33] dark:text-[#a1a399]"}`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-x-5 gap-y-10 p-1 sm:grid-cols-4 sm:gap-x-8 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10">
        {visibleSkills.map((skill) => (
          <SkillIcon key={skill.name} skill={skill} />
        ))}
      </div>
    </section>
  );
}
