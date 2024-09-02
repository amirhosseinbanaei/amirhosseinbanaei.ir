import socialsData from "@/data/social.data";
import styles from "@/styles/HeroSection.module.css";
import { ImageWithSkeleton } from "./SkeletonLoader";

export default function HeroSection({ t }: { t: Function }) {
  return (
    <>
      <section className="bg-heroSection flex h-screen w-full flex-col items-center justify-center gap-10 bg-cover bg-center py-10 md:h-fit lg:h-screen">
        <div className="bg-waveLine absolute left-0 top-0 -z-10 h-screen w-full bg-cover"></div>
        <div className="flex flex-col items-center gap-5">
          <div className="relative aspect-square h-28 w-28 rounded-lg">
            <ImageWithSkeleton
              width={512}
              height={512}
              priority={true}
              src="/amirhosseinbanaei.webp"
              alt={`${t("ownName")} image.`}
              className="rounded-3xl"
            />
          </div>
          <h1 className="text-2xl font-bold text-typography-primary lg:text-4xl">
            {t("ownName")}
          </h1>
        </div>

        <span className="flex flex-col items-center gap-10 fa:gap-20">
          <h2
            className={`${styles.title} -z-10 mx-auto text-center text-5xl font-black opacity-70 leading-[60px] md:leading-[120px] md:text-[83px] md:w-3/4 lg:text-8xl lg:leading-[125px]`}
          >
            {t("heroSection.bigTitle")}
          </h2>
          <h3 className="text-lg text-typography-primary fa:text-xl lg:text-xl lg:fa:text-2xl">
            {t("heroSection.littleTitle")}
          </h3>
        </span>

        <section className="flex h-20 items-center gap-7">
          {socialsData.map(
            (socialData) =>
              !socialData.isHidden && (
                <a
                  key={socialData.title}
                  title={`${socialData.title}`}
                  href={`${socialData.href}`}
                  target="_blank"
                >
                  <socialData.icon
                    className={`fill-typography-secondary hover:fill-typography-primary ${socialData.title === "X" ? "size-9" : "size-10"}`}
                  />
                </a>
              ),
          )}
        </section>
      </section>
    </>
  );
}
