import TitleAndDescription from "./TitleAndDescription";
import SideSpace from "./SideSpace";
import { ImageWithSkeleton } from "./SkeletonLoader";
import { useTranslations } from "next-intl";
import { cookies } from "next/headers";
interface Project {
  fa: ProjectInfoTranslation;
  en: ProjectInfoTranslation;
  image: string;
  links?: {
    preview?: string;
    github?: string;
  };
}

interface ProjectInfoTranslation {
  title: string;
  description: string;
}

interface ProjectCardProps {
  reverse?: boolean;
  data: Project;
}

export default async function ProjectsSection({ t }: { t: Function }) {
  const allProjects = await fetch("https://api.amirhosseinbanaei.ir/projects", {
    method: "GET",
    next: { revalidate: 86400 },
  }).then((res) => res.json());

  return (
    <SideSpace>
      <section className="flex w-full flex-col gap-20 md:gap-32">
        <TitleAndDescription
          title={t("projectsSection.title")}
          description={t("projectsSection.description")}
        />

        {/* Cards Container */}
        <section className="flex flex-col gap-20 md:gap-32">
          {allProjects.data.map((data: Project, index: number) => {
            return (
              <ProjectCard
                key={`${data.en.title} project`}
                data={data}
                reverse={index % 2 === 0 && true}
              />
            );
          })}
        </section>
      </section>
    </SideSpace>
  );
}

const ProjectCard: React.FC<ProjectCardProps> = ({ reverse, data }) => {
  const locale = (cookies().get("NEXT_LOCALE")?.value as "fa" | "en") || "fa";
  const t = useTranslations("HomePage");
  return (
    <>
      <section
        className={`flex w-full flex-col gap-10 2xl:px-10 ${reverse ? "md:flex-row" : "md:flex-row-reverse"}`}
      >
        <section className="h-full w-full md:w-1/2 lg:w-1/3 xl:w-2/5">
          <div className="relative aspect-video w-full">
            <ImageWithSkeleton
              width={1920}
              height={1080}
              src={`https://api.amirhosseinbanaei.ir/public/projects/${data.image}`}
              alt={`${data[locale].title} project image.`}
            />
          </div>
        </section>
        <section className="flex w-full flex-col justify-center gap-5 px-5 md:w-1/2 md:px-0 lg:w-2/3 xl:w-3/5">
          <h1 className="text-xl font-bold text-typography-primary xl:text-4xl">
            {data[locale].title}
          </h1>
          <p className="leading-7 text-typography-primary opacity-80 xl:leading-7">
            {data[locale].description}
          </p>
          {data.links && (
            <section className="mt-3 flex w-full items-center gap-5">
              {data.links.preview && (
                <a target="_blank" href={data.links.preview}>
                  <button className="rounded-lg bg-typography-secondary px-5 py-3 tracking-wide text-typography-primary">
                    {t("projectsSection.buttons.preview")}
                  </button>
                </a>
              )}
              {data.links.github && (
                <a target="_blank" href={data.links.github}>
                  <button className="rounded-lg border border-typography-secondary px-5 py-3 tracking-wide text-typography-primary">
                    {t("projectsSection.buttons.github")}
                  </button>
                </a>
              )}
            </section>
          )}
        </section>
      </section>
    </>
  );
};
