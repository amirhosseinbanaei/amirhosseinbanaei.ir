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
import Astro from "@/assets/icons/tech/astro.svg";
import Mysql from "@/assets/icons/tech/mysql.svg";
import Sqlite from "@/assets/icons/tech/sqlite.svg";

interface SkillsInformation {
  title: string;
  icon: Function;
}

const skillsInformation: SkillsInformation[] = [
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
  { title: "astro", icon: Astro },
  { title: "mysql", icon: Mysql },
  { title: "sqlite", icon: Sqlite },
];

export default skillsInformation;
