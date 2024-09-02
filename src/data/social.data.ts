import X from "@/assets/icons/X.svg";
import Linkedin from "@/assets/icons/Linkedin.svg";
import Github from "@/assets/icons/Github.svg";
import Instagram from "@/assets/icons/Instagram.svg";
type SocialTypes = {
  title: string;
  icon: any;
  href: string;
  isHidden?: boolean;
};

const socialsData: SocialTypes[] = [
  {
    title: "Github",
    icon: Github,
    href: "https://github.com/amirhosseinbanaei",
  },
  {
    title: "Linkedin",
    icon: Linkedin,
    href: "https://linkedin.com/in/amir-hossein-banaei/",
  },
  {
    title: "X",
    icon: X,
    href: "https://x.com/@Devamirhossein",
  },
  {
    title: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/amirhossein.banaei",
    isHidden: true,
  },
];

export default socialsData;
