import Phone from "@/assets/icons/Phone.svg";
import Envelope from "@/assets/icons/Envelope.svg";

type PersonalInfo = { value: string; icon: any; href: string };

const personalInformation: PersonalInfo[] = [
  { value: '+989196535654', icon: Phone, href: 'tel:+989196535654' },
  {
    value: 'developer.amirhossein@gmail.com',
    icon: Envelope,
    href: 'mailto:developer.amirhossein@gmail.com',
  },
];

export default personalInformation;