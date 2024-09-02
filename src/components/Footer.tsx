import SideSpace from "./SideSpace";
import ContainersStyle from "@/styles/Containers.module.css";
import { locales } from "@/i18n";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { cookies } from "next/headers";
export default function Footer() {
  const t = useTranslations("Footer");
  const currentLocale =
    (cookies().get("NEXT_LOCALE")?.value as "en" | "fa") || "fa";
  return (
    <footer>
      <SideSpace className="mb-0 mt-20 pb-0">
        <div
          className={`${ContainersStyle.black_container} flex w-full flex-col-reverse items-center justify-between gap-y-7 rounded-t-3xl p-10 md:h-24 md:flex-row md:py-0`}
        >
          <p className="text-center text-lg text-typography-primary md:text-start">
            {t("title")}
          </p>
          <div className="flex gap-5">
            {locales.map(async (locale: string) => {
              return (
                <Link
                  key={locale}
                  href={`/${locale}`}
                  className={`text-lg uppercase ${locale === currentLocale ? "text-typography-primary" : "text-typography-secondary"}`}
                >
                  {locale}
                </Link>
              );
            })}
          </div>
        </div>
      </SideSpace>
    </footer>
  );
}
