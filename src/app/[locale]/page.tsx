import HeroSection from "@/components/HeroSection";
import SideSpace from "@/components/SideSpace";
import Widget from "@/components/Widget";
import { useTranslations } from "next-intl";
import TitleAndDescription from "@/components/TitleAndDescription";
import Skills from "@/components/Skills";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <main>
      <HeroSection t={t} />
      <Widget t={t} />

      <SideSpace>
        <TitleAndDescription description={t("whoAmI")} />
      </SideSpace>

      <Skills t={t} />

      <ProjectsSection t={t} />
    </main>
  );
}
