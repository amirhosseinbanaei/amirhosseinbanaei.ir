import SideSpace from "./SideSpace";
import TitleAndDescription from "./TitleAndDescription";

// Importing Icons :
import Css from "@/assets/icons/tech/css.svg";
import Git from "@/assets/icons/tech/git.svg";
import Html from "@/assets/icons/tech/html.svg";
import React from "@/assets/icons/tech/react.svg";
import Vitejs from "@/assets/icons/tech/vitejs.svg";
import Nextjs from "@/assets/icons/tech/nextjs.svg";
import Nodejs from "@/assets/icons/tech/nodejs.svg";
import Express from "@/assets/icons/tech/express.svg";
import Mongodb from "@/assets/icons/tech/mongodb.svg";
import Webpack from "@/assets/icons/tech/webpack.svg";
import Javascript from "@/assets/icons/tech/javascript.svg";
import Typescript from "@/assets/icons/tech/typescript.svg";
import Tailwindcss from "@/assets/icons/tech/tailwindcss.svg";

export default function Skills({ t }: { t: Function }) {
  const skillsInformation = [
    { title: "html", icon: Html },
    { title: "css", icon: Css },
    { title: "javascript", icon: Javascript },
    { title: "typescript", icon: Typescript },
    { title: "tailwind css", icon: Tailwindcss },
    { title: "react", icon: React },
    { title: "next js", icon: Nextjs },
    { title: "node js", icon: Nodejs },
    { title: "express", icon: Express },
    { title: "mongodb", icon: Mongodb },
    { title: "git", icon: Git },
    { title: "vitejs", icon: Vitejs },
    { title: "webpack", icon: Webpack },
  ];
  return (
    <SideSpace>
      <section className="my-10 flex flex-col gap-10" dir="ltr">
        <TitleAndDescription
          title={t("skillsSection.title")}
          description={t("skillsSection.description")}
        />
        <div className="mt-10 flex w-full flex-wrap justify-center gap-10 gap-y-20">
          {skillsInformation.map((eachSkillInfo) => {
            return (
              <div
                key={eachSkillInfo.title}
                className="flex h-24 w-28 flex-col items-center justify-center gap-4"
              >
                <eachSkillInfo.icon className="size-12 fill-typography-primary" />
                <p className="font-medium capitalize text-typography-primary">
                  {eachSkillInfo.title}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </SideSpace>
  );
}
