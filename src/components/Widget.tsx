import Image from "next/image";
import SideSpace from "./SideSpace";
import Phone from "@/assets/icons/Phone.svg";
import Persons from "@/assets/icons/Persons.svg";
import Envelope from "@/assets/icons/Envelope.svg";
import ContainersStyle from "@/styles/Containers.module.css";

type PersonalInfo = { key: string; icon: any; href: string };

export default function Widget({ t }: { t: Function }) {
  const allPersonalInformation: PersonalInfo[] = [
    { key: "widget.phoneNumber", icon: Phone, href: "tel:+989354344670" },
    {
      key: "widget.email",
      icon: Envelope,
      href: "mailto:developer.amirhossein@gmail.com",
    },
  ];
  return (
    <>
      <SideSpace>
        <section
          className={`relative grid h-auto w-full grid-cols-12 rounded-lg py-5 md:px-4 xl:h-32 xl:grid-rows-1 xl:rounded-3xl xl:px-8 ${ContainersStyle.black_container}`}
        >
          <section className="col-span-1 hidden aspect-square h-full w-full md:col-span-3 md:block xl:col-span-1">
            <Persons className="h-full w-full fill-typography-primary" />
          </section>

          <section className="col-span-full h-full w-full flex-col justify-center space-y-5 px-4 md:col-span-9 md:px-10 xl:space-y-1 xl:px-5">
            <h1 className="text-center text-xl font-bold text-typography-primary md:text-start lg:text-2xl">
              {t("widget.title")}
            </h1>
            <div className="flex h-full w-full flex-col gap-4 xl:h-1/2 xl:flex-row 2xl:gap-10">
              {allPersonalInformation.map((personalInfo) => {
                return (
                  <PersonalInformation
                    key={personalInfo.key}
                    t={t}
                    personalInfo={personalInfo}
                  />
                );
              })}
            </div>
          </section>

          {/* Cv Button Container */}
          <section className="col-span-full justify-end flex h-20 w-full p-5 pb-0 xl:col-span-2 xl:h-auto xl:p-3">
            <button className="h-full w-full rounded-lg bg-[#313953] text-base text-typography-primary md:text-xl">
              {t("widget.button")}
            </button>
          </section>
        </section>
      </SideSpace>
    </>
  );
}

function PersonalInformation({
  personalInfo,
  t,
}: {
  t: Function;
  personalInfo: PersonalInfo;
}) {
  return (
    <div className="flex w-fit items-center">
      <span className="aspect-square p-1 ltr:mr-1 rtl:ml-2">
        <personalInfo.icon className="inline size-6 fill-typography-primary" />
      </span>
      <a
        href={personalInfo.href}
        aria-label={personalInfo.key}
        dir="ltr"
        className="tracking-wide text-typography-primary md:text-lg"
      >
        {t(`${personalInfo.key}`)}
      </a>
    </div>
  );
}
