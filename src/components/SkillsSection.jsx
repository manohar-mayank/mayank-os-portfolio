import AwsOriginalIcon from "@devicon/react/amazonwebservices/original-wordmark";
import Css3OriginalIcon from "@devicon/react/css3/original";
import DockerOriginalIcon from "@devicon/react/docker/original";
import ExpressOriginalIcon from "@devicon/react/express/original";
import GitOriginalIcon from "@devicon/react/git/original";
import GithubOriginalIcon from "@devicon/react/github/original";
import Html5OriginalIcon from "@devicon/react/html5/original";
import JavaOriginalIcon from "@devicon/react/java/original";
import JavascriptOriginalIcon from "@devicon/react/javascript/original";
import MongodbOriginalIcon from "@devicon/react/mongodb/original";
import MysqlOriginalIcon from "@devicon/react/mysql/original";
import NodejsOriginalIcon from "@devicon/react/nodejs/original";
import OpenapiOriginalIcon from "@devicon/react/openapi/original";
import PostmanOriginalIcon from "@devicon/react/postman/original";
import ReactOriginalIcon from "@devicon/react/react/original";
import TailwindcssOriginalIcon from "@devicon/react/tailwindcss/original";
import VercelOriginalIcon from "@devicon/react/vercel/original";
import VscodeOriginalIcon from "@devicon/react/vscode/original";
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
  openapi: OpenapiOriginalIcon,
  mongodb: MongodbOriginalIcon,
  mysql: MysqlOriginalIcon,
  git: GitOriginalIcon,
  docker: DockerOriginalIcon,
  aws: AwsOriginalIcon,
  java: JavaOriginalIcon,
  github: GithubOriginalIcon,
  postman: PostmanOriginalIcon,
  vercel: VercelOriginalIcon,
  vscode: VscodeOriginalIcon,
};
const customIcons = {
  gsap: (
    <>
      <path d="M3 16c3-8 13-11 18-4" />
      <circle cx="6" cy="14" r="2" />
      <circle cx="19" cy="12" r="2" />
    </>
  ),
  jwt: (
    <>
      <path d="M12 3 20 6v5c0 5-3.4 8.4-8 10-4.6-1.6-8-5-8-10V6l8-3Z" />
      <path d="m8.5 12 2.2 2.2 4.8-5" />
    </>
  ),
  langchain: (
    <>
      <path d="m9 8-2-2a4 4 0 1 0-5.7 5.7l4 4A4 4 0 0 0 11 16l2-2" />
      <path d="m15 16 2 2a4 4 0 1 0 5.7-5.7l-4-4A4 4 0 0 0 13 8l-2 2" />
      <path d="m8 16 8-8" />
    </>
  ),
  gemini: (
    <>
      <path d="m12 2 2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4L12 2Z" />
      <path d="m19 2 .8 2.2L22 5l-2.2.8L19 8l-.8-2.2L16 5l2.2-.8L19 2Z" />
    </>
  ),
  qdrant: (
    <>
      <path d="M5 7h14M5 12h14M5 17h14" />
      <circle cx="8" cy="7" r="2" />
      <circle cx="16" cy="12" r="2" />
      <circle cx="10" cy="17" r="2" />
    </>
  ),
  vectors: (
    <>
      <path d="M4 20V4m0 16h17M4 20l7-8 4 3 6-9" />
      <circle cx="11" cy="12" r="1.5" />
      <circle cx="15" cy="15" r="1.5" />
      <circle cx="21" cy="6" r="1.5" />
    </>
  ),
  llms: (
    <>
      <path d="M6 6 12 12 18 6M6 18l6-6 6 6" />
      <circle cx="6" cy="6" r="2" />
      <circle cx="18" cy="6" r="2" />
      <circle cx="12" cy="12" r="2" />
      <circle cx="6" cy="18" r="2" />
      <circle cx="18" cy="18" r="2" />
    </>
  ),
  langgraph: (
    <>
      <path d="M6 6h12v12H6zM6 12h12M12 6v12" />
      <circle cx="6" cy="6" r="2" />
      <circle cx="18" cy="6" r="2" />
      <circle cx="6" cy="18" r="2" />
      <circle cx="18" cy="18" r="2" />
      <circle cx="12" cy="12" r="2" />
    </>
  ),
  rag: (
    <>
      <path d="M6 3h9l4 4v6M15 3v5h5M8 12h5M8 16h4" />
      <circle cx="16" cy="17" r="3" />
      <path d="m18.2 19.2 2 2" />
    </>
  ),
  embeddings: (
    <>
      <path d="M4 19V5m0 14h17" />
      <path d="m6 16 4-3 3 1 6-7" />
      <circle cx="10" cy="13" r="1.5" />
      <circle cx="13" cy="14" r="1.5" />
      <circle cx="19" cy="7" r="1.5" />
    </>
  ),
  render: (
    <>
      <path d="M5 19V5h8a5 5 0 0 1 0 10H5m7 0 7 4" />
      <path d="M9 9h4a1 1 0 0 1 0 2H9" />
    </>
  ),
};
function SkillIcon({ skill }) {
  const Icon = icons[skill.icon];
  const CustomIcon = customIcons[skill.icon];
  return (
    <div className="group flex min-w-0 flex-col items-center gap-2 text-center">
      <div
        title={skill.name}
        className="grid aspect-square w-full max-w-16 place-items-center rounded-md border border-stone-200 bg-white p-2 text-4xl transition-transform duration-200 group-hover:scale-105 dark:border-[#373b33] dark:bg-white motion-reduce:transition-none"
      >
        {Icon ? (
          <Icon aria-hidden="true" size="1.2em" />
        ) : CustomIcon ? (
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-7 w-7 text-[#19210c]"
          >
            {CustomIcon}
          </svg>
        ) : (
          <span className="font-mono text-xs font-bold text-[#19210c]">
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
      <div className="grid grid-cols-3 gap-x-4 gap-y-7 p-1 sm:grid-cols-4 sm:gap-x-6 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10">
        {visibleSkills.map((skill) => (
          <SkillIcon key={skill.name} skill={skill} />
        ))}
      </div>
    </section>
  );
}
